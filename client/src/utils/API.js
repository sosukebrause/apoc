import axios from 'axios';

export default {

// gets Covid data from city search
    getCovidData: function(city, state_name) {
    return axios.get("http://localhost:5000/api/covid",{city, state_name});
},


}