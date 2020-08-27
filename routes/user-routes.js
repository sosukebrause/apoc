const router = require("express").Router();

router.get("/user", (req, res) => {
  res.send("express user-routes is working");
});

module.exports = router;
