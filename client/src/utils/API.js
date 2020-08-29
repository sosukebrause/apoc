import axios from 'axios';

export default {

// gets Covid data from city search
    getCovidData: function() {
    return axios.get("/api/covid");
},


}