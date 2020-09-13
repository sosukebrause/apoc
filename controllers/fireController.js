module.exports = {
  findFireData: function (city, state_name, lat, lng) {
    const axios = require("axios");

    require("dotenv").config();
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8?status=open`,
      })
        .then((response) => {
          console.log(response);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
