module.exports = {
    findCovidData: function() {
    const axios = require("axios");



axios({
    "method":"GET",
    "url":"https://covid-19-statistics.p.rapidapi.com/reports",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"covid-19-statistics.p.rapidapi.com",
    "x-rapidapi-key":"hxz7Q1QSA9mshuJSi7yRUIzHCWZRp1MXf5OjsnFDEivrcsprCt",
    "useQueryString":true
    },"params":{
    "iso":"USA",
    "region_name":"US",
    "city_name":"San Francisco",
    // "date":"2020-08-28",
    "q":"US California"
    }
    })
    .then((response)=>{
      console.log(response.data.data[0].region)
    })
    .catch((error)=>{
      console.log(error)
    })
}
}