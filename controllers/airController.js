module.exports = {
  findAQData: function (lat, lng) {
    const axios = require("axios");
    require("dotenv").config();

    let promise = new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `https://api.waqi.info/feed/geo:${lat};${lng}/?token=${process.env.AIRQUALITY}`,
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => reject(err));
    });
    return promise;
  },
};
