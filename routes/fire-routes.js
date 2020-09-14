const router = require("express").Router();
const controller = require("../controllers");

router.get("/api/fires", async (req, res) => {
  const d = 10;
  const { city, state_name, lat, lng } = req.query;

  if (!city || !state_name)
    return res.status(400).json({ msg: "Please enter city and state" });

  try {
    // const dbCityInfo = await controller.db.findInfoFromCity(city, state_name);
    // console.log("FROM FIRE ROUTES", dbCityInfo);

    var data = await controller.fires.getFireData(
      -119.605436006,
      37.841271365,
      d
    );

    console.log(data);

    // if (dbCityInfo.data.length >= 1) {
    //   var data =
    //     (await controller.fires.getFireData(
    //       dbcityInfo.data[0].lat,
    //       dbcityInfo.data[0].lng
    //     )) || [];

    // console.log(data);
    return res.json({ data });
    // } else {
    //   return res.status(400).json({ data: [] });
    // }
  } catch (error) {
    return res.status(500).json({ msg: "no data found" });
  }
});

module.exports = router;
