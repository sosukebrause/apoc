module.exports = {
findWeatherData: function(city) {

const axios = require("axios");
require("dotenv").config();

axios({
    "method":"GET",
    "url":"https://community-open-weather-map.p.rapidapi.com/weather",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
    "x-rapidapi-key":process.env.WEATHERKEY,
    "useQueryString":true
    },"params":{
    "callback":"test",
    "id":"2172797",
    "units":"imperial",
    // "mode":"",
    "q":`${city},usa`
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })

}
}