const router = require("express").Router();
const { findCovidData } = require("../controllers/covidController");
const cities = require("../models/city");

router.get("/api/covid", async (req, res) => {
  var city = req.query.city;
  var state_name = req.query.state_name;
  //console.log(city, state_name);
  cities.find({ city, state_name }).then((info) => {
    //console.log(info);
    if (info && info.length != 0) {
      return {county: info[0].county_name, state_name};
    } else {
      return { msg: "no data from api" };
    }
  }).then( async(info) => {  
    if (!info.county) return res.json(info)
    try {
      var data = await findCovidData(info.state_name, info.county);
      return res.json(data);
    } catch(error) {
      return res.json({ msg: "no data" });
    }
  })
});

// router.get("/api/city", async (req, res) => {
//   var city = req.body.city;
//   var state_name = req.body.state_name;
//   cities
//     .find({ city, state_name })
//     .then((info) => {
//       console.log(info);
//       if (info && info.length != 0) {
//         res.json(info[0].county_name);
//       } else {
//         res.json({ msg: "no data" });
//       }
//     })
//     .catch((err) => res.send(err));
// });

module.exports = router;
