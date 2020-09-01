
module.exports = {
    findCrimeData: function (lat, lng) {
    const axios = require("axios");

require("dotenv").config();
return new Promise((resolve, reject)=> {

    axios({
        "method":"GET",
        "url":"https://jgentes-crime-data-v1.p.rapidapi.com/crime",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"jgentes-Crime-Data-v1.p.rapidapi.com",
        "x-rapidapi-key":process.env.CRIMEKEY,
        "useQueryString":true
        },"params":{
        "startdate":"9%2F19%2F2019",
        "enddate":"9%2F25%2F2019",
        "lat":`${lat}`,
        "long":`${lng}`
        }
        })
        .then((response)=>{
          console.log(response)
          resolve(response.data)
        })
        .catch((error)=>{
          reject(error)
        });
})

}
}





