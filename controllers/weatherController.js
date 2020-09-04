module.exports = {
findWeatherData: function(lat, lng) {

const axios = require("axios");
require("dotenv").config();

axios({
    "method":"GET",
    "url":`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&
    exclude=daily&appid=${process.env.WEATHERKEY}`,
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })

}
}

