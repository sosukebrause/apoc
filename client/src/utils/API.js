import axios from 'axios';

export default {


    
// gets Covid data from city search
    getCovidData: function(city, state_name, days) {
        console.log("This is from API.js", city, state_name, days);
    // return axios.get("api/covid", {data: {city, state_name}});
     return axios({ 
        url: "http://localhost:5000/api/covid",
        method: "GET",
        params: { city, state_name, days}
      })
},

getEarthquakeData: function(){

    return axios({


    })
}

}