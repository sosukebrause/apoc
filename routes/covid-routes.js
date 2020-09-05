const router = require("express").Router();
const { findCovidData, findCountyFromDB } = require("../controllers/covidController");
const db = require("../models");
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
      let data = await findCovidData(state_name, county, numDays);
      return res.json({ data });
    } catch (error) {
      console.log("error", error);
      return res.json({ msg: "no data found" });
    }
  }
  //console.log(city, state_name);
  /*
  db.City.find({
    city: new RegExp("^"+city, "i"),
    state_name: new RegExp("^"+state_name, "i"),
  })
    .then((info) => {
      //console.log(info);
      if (info && info.length === 1) {
        return { 
          data: [{
            city: info[0].city,
            county: info[0].county_name, 
            state_name: info[0].state_name 
          }]
        };
      } else if (info && info.length > 1) {
        return {
          data: info.map(item=> {
            return {
              city: item.city, 
              county: item.county_name, 
              state_name: item.state_name 
            };
          }),
        };
      } else {
        return { msg: "no data" };
      }
    })
    //*/
    findCountyFromDB(city, state_name)
    .then(async (info) => {
      console.log(info)
      if (info.data.length !== 1) return res.status(400).json({data: info.data})
      try {
        var data = await findCovidData(info.data[0].state_name, info.data[0].county, numDays);
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