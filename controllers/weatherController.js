module.exports = {
findWeatherData: function(lat, lng) {

const axios = require("axios");
require("dotenv").config();

axios({
    "method":"GET",
    "url":`http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lng}&dt=1586468027&appid=${WEATHERKEY}`,
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })

}
}

