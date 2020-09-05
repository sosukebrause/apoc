module.exports = {
    findInfoFromCity: function(city, state_name) {
      const db = require("../models");
      return new Promise((resolve, reject)=>{
        db.City.find({
          city: new RegExp("^"+city, "i"),
          state_name: new RegExp("^"+state_name, "i"),
        }).then(info=>{
          if (info && info.length === 1) {
            resolve({ 
              data: [{
                city: info[0].city,
                county: info[0].county_name, 
                state_name: info[0].state_name,
                lat: info[0].lat,
                lng: info[0].lng
              }]
            });
          } else if (info && info.length > 1) {
            resolve({
              data: info.map(item=> (
                {
                  city: item.city, 
                  county: item.county_name, 
                  state_name: item.state_name,
                  lat: item.lat,
                  lng: item.lng
                }
              )),
            });
          } else {
            resolve({data: []});
          }
        }).catch(err=>{
          console.log(err)
          reject({ msg: "DB error" })
        });
      });
    }
  }