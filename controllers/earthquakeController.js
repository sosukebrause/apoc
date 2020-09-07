module.exports = {
  findEqData: async function (lat, lng) {
    const axios = require("axios");
    //find the API key and add to dotenv
    require("dotenv").config();

    // let promise = new Promise(async (resolve, reject) => {
    try {
      const earthquake = await axios({
        method: "GET",
        url:
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson",
      });
      console.log("earthquake.data");
      return earthquake.data;
      //   resolve(earthquake);
    } catch (error) {
      // reject(error);
      return error;
    }
    // });
    // return promise;
  },
};

//https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
