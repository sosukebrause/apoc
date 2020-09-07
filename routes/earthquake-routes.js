const router = require("express").Router();
const controller = require("../controllers");
router.get("/api/earthquake", async (req, res) => {
  var city = req.query.city;
  var state_name = req.query.state_name;
  var lat = req.query.lat;
  var lng = req.query.lng;
<<<<<<< HEAD
=======

>>>>>>> 827dcc338a7cff7b0ff3c3f7dc1609c2d0c66754
  if (!city || !state_name) {
    return res.status(400).json({ msg: "query string is empty" });
  }
  const info = await controller.db.findInfoFromCity(city, state_name);
<<<<<<< HEAD
  if (info.data.length !== 1) return res.status(400).json({ data: info.data });
  console.log(info);
=======

  if (info.data.length !== 1) return res.status(400).json({ data: info.data });
  console.log(info);

>>>>>>> 827dcc338a7cff7b0ff3c3f7dc1609c2d0c66754
  try {
    var data = await controller.earthquake.findEqData(
      info.data[0].lat,
      info.data[0].lng
    );
    console.log("earthquake route", data);
    res.json(data);
  } catch (error) {
    console.log("error", error);
    return res.status(404).json({ msg: "no data found" });
  }
<<<<<<< HEAD
  // });
});
module.exports = router;
=======

  // });
});

module.exports = router;
>>>>>>> 827dcc338a7cff7b0ff3c3f7dc1609c2d0c66754
