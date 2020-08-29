const router = require("express").Router();
const {findCovidData} = require("../controllers/covidController")

router.get("/api/covid", (req, res) => {
    findCovidData();
    res.send("route hit");
})



module.exports = router;