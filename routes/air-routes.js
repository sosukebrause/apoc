const router = require("express").Router();
const controller = require("../controllers");


router.get("/api/air", async (req, res) => {
    var city = req.query.city;
    var state_name = req.query.state_name;
    var lat = req.query.lat;
    var lng = req.query.lng;
    if (!city || !state_name) {
        return res.status(400).json({ msg: "query string is empty" });
      }
      if(lat && lng) {
        console.log(lat, lng)
        try {
          var data = await controller.air.findAirData(lat, lng);
          return res.json({ data });
        } catch (error) {
          console.log("error", error);
          return res.status(404).json({ msg: "no data found" });
        }
      }
      controller.db.findInfoFromCity(city, state_name)
      .then(async (info) => {
        if (info.data.length !== 1) return res.status(400).json({data: info.data})
        console.log(info);
        try {
          var data = await controller.air.findAirData(info.data[0].lat, info.data[0].lng);
          return res.json({ data });
        } catch (error) {
          console.log("error", error);
          return res.status(404).json({ msg: "no data found" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "DB error" });
      });
  });

module.exports = router;



