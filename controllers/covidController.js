
module.exports = {
    findCovidData: function (state, county) {
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
    "city_name":`${county}`,
    // "date":"2020-08-28",
    "q":`US ${state}`
    }
    })
    .then((response)=>{
      // console.log(response.data)
      resolve(response.data);
    })
    .catch((error)=>{
      reject(error)
    });
})

}
}