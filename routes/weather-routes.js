const router = require("express").Router();
const { findWeatherData } = require("../controllers/weatherController");
const db = require("../models");



router.get("/api/weather", async (req, res) => {
  var city = req.query.city;
  var state_name = req.query.state_name;

  if (!city || !state_name) {
    return res.status(400).json({ msg: "query string is empty" });
  }
    db.City.find({
      city: new RegExp("^"+city, "i"),
      state_name: new RegExp("^"+state_name, "i"),
    })
      .then((info) => {
        if (info && info.length === 1) {
          return { lat: info[0].lat, lng: info[0].lng };
        } else {
          return { msg: "no data" };
        }
      })
      .then(async (info) => {
        console.log(info);
        try {
          var data = await findWeatherData(info.lat, info.lng);
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