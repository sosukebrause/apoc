module.exports = {
  findEqData: async function (lat, lng) {
    const axios = require("axios");
    //find the API key and add to dotenv
    require("dotenv").config();
<<<<<<< HEAD
=======

>>>>>>> 827dcc338a7cff7b0ff3c3f7dc1609c2d0c66754
    try {
      const earthquake = await axios({
        method: "GET",
        url:
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson",
      });
      console.log("earthquake.data");
      return earthquake.data;
    } catch (error) {
      return error;
    }
  },
};
//https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp