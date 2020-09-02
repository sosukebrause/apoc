
module.exports = {
    findCrimeData: function (lat, lng) {
    const axios = require("axios");

require("dotenv").config();
return new Promise((resolve, reject)=> {

    axios({
        "method":"GET",
        "url":`https://api.usa.gov/crime/fbi/sapi/{desired_endpiont}?api_key=${CRIMEKEY}`,
    
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





