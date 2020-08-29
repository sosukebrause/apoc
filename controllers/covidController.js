

module.exports = {
    findCovidData: function () {
    const axios = require("axios");

require("dotenv").config();
return new Promise((resolve, reject)=> {

  axios({
    "method":"GET",
    "url":"https://covid-19-statistics.p.rapidapi.com/reports",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"covid-19-statistics.p.rapidapi.com",
    "x-rapidapi-key": process.env.COVIDKEY,
    "useQueryString":true
    },"params":{
    "iso":"USA",
    "region_name":"US",
    // "city_name":"San Francisco",
    // "date":"2020-08-28",
    "q":"US California"
    }
    })
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    });
})

}
}