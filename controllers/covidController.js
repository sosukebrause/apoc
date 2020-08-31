
module.exports = {
  findCovidData: function (state, county) {

return new Promise((resolveAll, rejectAll) => {




    const axios = require("axios");

    require("dotenv").config();

    var array = [];
    for (let index = 0; index < 3; index++) {
      let promise = new Promise((resolve, reject) => {

        var date = new Date();
        date.setDate(date.getDate() - index);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        if (month < 10) {
          month = "0" + month
        }
        if (day < 10) {
          day = "0" + day
        }
        console.log(year, month, day)

        axios({
          "method": "GET",
          "url": "https://covid-19-statistics.p.rapidapi.com/reports",
          "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
            "x-rapidapi-key": process.env.COVIDKEY,
            "useQueryString": true
          }, "params": {
            "iso": "USA",
            "region_name": "US",
            "city_name": `${county}`,
            "date": `${year}-${month}-${day}`,
            "q": `US ${state}`
          }
        })
          .then((response) => {
            console.log(response.data)
            resolve(response.data);
          })
          .catch((error) => {
            reject(error)
          });
      
    })
    array.push(promise);
  }
  Promise.all(array).then((values) => {
    let results = [];
    for (let index = 0; index < values.length; index++) {
      let data  = values[index].data;
      if (data.data && data.data.length != 0) {
        console.log(data.data[0].region.cities[0])
        results.push(data.data[0].region.cities[0])
      }
    }
    console.log("resolveall")
    resolveAll(results)
  }).catch(err=>{
    console.log("error in promise.all", err)
    rejectAll([]);
  })
})
}
}
