module.exports = {
  findWeatherData: function (lat, lng) {

    const axios = require("axios");
    require("dotenv").config();

    let promise = new Promise((resolve, reject) => {

      axios({
        "method": "GET",
        "url": `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly&appid=${process.env.WEATHERKEY}`,
      })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
    return promise;
  }

}

