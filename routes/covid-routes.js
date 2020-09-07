const router = require("express").Router();
const controller = require("../controllers");


router.get("/api/covid", async (req, res) => {
  var city = req.query.city;
  var state_name = req.query.state_name;
  var county = req.query.county;
  var numDays = Number(req.query.numDays) || 60;
  if (!city || !state_name) {
    return res.status(400).json({ msg: "query string is empty" });
  }
  if (numDays % 1 !== 0 || !(numDays > 0 && numDays <= 60)) {
    return res
      .status(400)
      .json({ msg: "days should be an integer within 1 and 60" });
  }
  if (county) {
    console.log(county, state_name)
    try {
      let data = await controller.covid.findCovidData(state_name, county, numDays);
      return res.json({ data });
    } catch (error) {
      console.log("error", error);
      return res.json({ msg: "no data found" });
    }
  }
  //console.log(city, state_name);
  controller.db.findInfoFromCity(city, state_name)
    .then(async (info) => {
      console.log(info)
      if (info.data.length !== 1) return res.status(400).json({data: info.data})
      try {
        var data = await controller.covid.findCovidData(info.data[0].state_name, info.data[0].county, numDays);
        return res.json({ data });
      } catch (error) {
        console.log("error", error);
        return res.json({ msg: "no data found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "DB error" });
    });
});
module.exports = router;