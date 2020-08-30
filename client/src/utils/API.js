import axios from 'axios';

export default {

// gets Covid data from city search
    getCovidData: function(city, state_name) {
    return axios.get("api/covid");
},


}