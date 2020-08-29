const router = require("express").Router();

router.get("/test", (req, res) => {
  res.send("express router callback is working");
});



const db = require("../models");


module.exports = router;
