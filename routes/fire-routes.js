const router = require("express").Router();
const controller = require("../controllers");
const mongoose = require("mongoose");

router.get("/api/fires", (req, res) => {
const d = 1000
const { city, state_name, lat, lng } = req.query;

  if (!city || !state_name)
    return res.status(400).json({ msg: "Please enter city and state" });

    if (lat && lng) {
    try {
      var data = await controller.fire.findFireData(lat, lng, d) || [];

      console.log("fire route", data);
      return res.json(data);
    } catch (error) {
      console.log("error", error);
      return res.status(404).json({ msg: "no data found" });
    }
  }
  
  let dbCityInfo = { data: [] };

  try {
    const data = await controller.db.findInfoFromCity(city, state_name);
    dbCityInfo.data = data.data || [];
  } catch (error) {
    return res.status(500).json({ msg: "no data found" });
  }

   if (dbCityInfo.data.length !== 1)
    return res.status(400).json({ data: dbCityInfo.data });

  try {
    const fireData = await controller.fire.findFireData(

       info.data[0].lat,
        info.data[0].lng,
        d
      
      ) || [];

      res.json({ data: fireData })
      console.log("fire data from fireroutes: ", { fireData });
      } catch (error) {
      console.log("error", error);
      return res.status(500).json({ msg: "no data found" });
  }
});

// info.events[0].geometries[0].coordinates[0],
//         info.events[0].geometries[0].coordinates[0], d

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
