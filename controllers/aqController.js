module.exports = {
  findAQData: function (city) {
    return new Promise((resolveAll, rejectAll) => {
      const axios = require("axios");
      require("dotenv").config();

          axios({
            method: "GET",
            url: "https://api.waqi.info/feed",
            headers: {
              "content-type": "application/octet-stream",
              "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
              "x-rapidapi-key": process.env.AQKEY,
              useQueryString: true,
            },
            params: {
              city
            },
          })
            .then((response) => {
              resolve(response.data);
            })
            .catch((error) => {
              console.log("err from axios", error);
              reject(error);
            });
        });
        array.push(promise);
      }

      