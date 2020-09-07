const router = require("express").Router();
const controller = require("../controllers");

router.get("/api/map", async (req, res) => {
    var city = req.query.city;
    var state_name = req.query.state_name;
    var lat = req.query.lat;
    var lng = req.query.lng;
    if (!city || !state_name) {
        return res.status(400).json({ msg: "query string is empty" });
      }
      if(lat && lng) {
          return res.json({data: [{
              city, state_name, lat, lng
          }]});
        }
      controller.db.findInfoFromCity(city, state_name)
      .then(async (info) => {
        if (info.data.length !== 1) return res.status(400).json({data: info.data})
        return res.json({data: info.data });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "DB error" });
      });
  });


module.exports = router;
