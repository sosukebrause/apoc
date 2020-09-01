const router = require("express").Router();
const { findCrimeData } = require("../controllers/crimeController");
// const cities = require("../models/city");
const db = require("../models");

// router.get("/api/crime", async (req, res) => {
//   var city = req.body.city;
//   var state_name = req.body.state_name;
//  cities.find({ city, state_name }).then((info) => {
//     console.log(info);
//     if (info && info.length != 0) {
//       return {lat: info[0].lat, lat: info[0].lng};
//     } else {
//       return { msg: "no data" };
//     }
//   }).then( async(info) => {
//     if (!info.county) return res.json(info)

//     var data = await findCrimeData(info.lat, info.lng);
//     if (data.data && data.data.length != 0) {
//       res.json(data.data[0].region.cities[0]);
//     } else {
//       res.json({ msg: "no data" });
//     }
//   })
// });

router.get("/api/crimetest", async (req, res) => {
  try {
    var data = await findCrimeData(req.body.lat, req.body.lng);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
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
