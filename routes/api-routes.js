const router = require("express").Router();

router.get("/test", (req, res) => {
  res.send("express router callback is working");
});

module.exports = router;
