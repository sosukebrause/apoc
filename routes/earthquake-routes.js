const router = require("express").Router();
const controller = require("../controllers");

router.get("/api/earthquake", async (req, res) => {
  var city = req.query.city;
  var state_name = req.query.state_name;

  if (!city || !state_name) {
    return res.status(400).json({ msg: "query string is empty" });
  }

  const cityInfo = await controller.db.findInfoFromCity(city, state_name);
  console.log(cityInfo);
});
