import axios from 'axios';

export default {


    
// gets Covid data from city search
    getCovidData: function(city, state_name, numDays) {
        console.log("This is from API.js", city, state_name, numDays);
    // return axios.get("api/covid", {data: {city, state_name}});
     return axios({ 
        url: "http://localhost:5000/api/covid",
        method: "GET",
        params: { city, state_name, numDays}
      })
},
}