import axios from 'axios';

export default {


    
// gets Covid data from city search
    getCovidData: function(city, state_name, county, numDays) {
        console.log("This is from API.js", city, state_name, county, numDays);
    // return axios.get("api/covid", {data: {city, state_name}});
     return axios({ 
        url: "http://localhost:5000/api/covid",
        method: "GET",
        params: { city, state_name, county, numDays}
      })
},


   //gets Weather data from search
   getWeatherData: function(city, state_name, lat, lng) {
       return axios({
        url: "http://localhost:5000/api/weather",
        method: "GET",
        params: { city, state_name, lat, lng}
       })
   }, 

      //gets Air data data from search
      getAirData: function(city, state_name, lat, lng) {
        return axios({
         url: "http://localhost:5000/api/air",
         method: "GET",
         params: {city, state_name, lat, lng}
        })
    }, 

getEarthquakeData: function(){

    return axios({


    })
}

}