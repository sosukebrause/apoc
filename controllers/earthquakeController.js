module.exports = {
  findEqData: function () {
    const axios = require("axios");
    //find the API key and add to dotenv
    require("dotenv").config();
    axios({
      method: "GET",
      url:
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp",
    }).then(res);
  },
};

//https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
