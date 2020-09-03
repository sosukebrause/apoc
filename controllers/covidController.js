
const convertDateFormat = date => {
  let year = date.getFullYear().toString();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  return `${year}-${month.length === 1 ? "0"+month : month }-${day.length === 1 ? "0"+day : day}`;
}

module.exports = {
  findCovidData: function (state, county, numDays=1) {

  return new Promise((resolveAll, rejectAll) => {

    const axios = require("axios");
    require("dotenv").config();

    let array = [];
    for (let index = numDays ; index > 0; index--) {
      let promise = new Promise((resolve, reject) => {

        let date = new Date();
        date.setDate(date.getDate() - index); 
        let dateStr = convertDateFormat(date);

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
            "city_name": county,
            "date": dateStr,
            "q": `US ${state}`
          }
         
        })
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            console.log("err from axios",error)
            reject(error)
          });
      })
      array.push(promise);
    }
   
    Promise.all(array
      .map(promise=>promise.then(ok=>{ return {"success": true, "data": ok.data}}).catch(err=>{ console.log("err from map",err); return {"success": false, "data": null}}))
    ).then((values) => {
      let results = [];
      for (let index = 0; index < values.length; index++) {
        if (values[index].success) {
          let data = values[index].data;
          if (data && data.length !== 0) {
            results.push(data[0].region.cities[0]);
          }
        } 
        // else { results.push("no data"); }
      }
      resolveAll(results)
    }).catch(err=>{
      console.log("error in promise.all", err)
      rejectAll([]);
    })
  })
  }
}



