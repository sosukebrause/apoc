const router = require("express").Router();
const { findWeatherData } = require("../controllers/weatherController");
const db = require("../models");



router.get("/api/weather", async (req, res) => {
    var city = req.query.city;
    try{
    var data = await findWeatherData(city);

    }
    catch (error) {
        console.log("error", error);
        return res.json({ msg: "no data found" });
      }
});

module.exports = router;