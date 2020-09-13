const convertDateFormat = (date) => {
  let year = date.getFullYear().toString();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  return `${year}-${month.length === 1 ? "0" + month : month}-${
    day.length === 1 ? "0" + day : day
  }`;
};

const degToRad = (value) => (value * Math.PI) / 180.0;

const earthRadius = 3963.0;

function findDistByLatLng(lat1, lng1, lat2, lng2) {
  return (
    Math.acos(
      Math.sin(lat1) * Math.sin(lat2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1)
    ) * earthRadius
  );
}

module.exports = {
  findFireData: async function (lat, lng, d) {
    const axios = require("axios");

    require("dotenv").config();
    console.log(lat, lng, d);
    try {
      const fires = await axios({
        method: "GET",
        url:
          "https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8?status=open",
      });
      console.log(fires.data);
      let result = [];

      let array = fires.data.events || [];
      console.log(array);
      array.map((feature) => {
        let eqLat = feature.geometries.coordinates[1];
        let eqLng = feature.geometries.coordinates[0];
        var time = new Date(geometries.time);
        let converted = convertDateFormat(time);
        let distance = findDistByLatLng(
          degToRad(lat),
          degToRad(lng),
          degToRad(eqLat),
          degToRad(eqLng)
        );
        // console.log(distance);

        if (distance <= d) {
          const eqObj = {
            distance: distance,
            time: converted,
            title: feature.title,
            lat: eqLat,
            lng: eqLng,
          };
          result.push(eqObj);
        }
      });
      console.log("n=", result.length, "eq objects");
      return result;
    } catch (error) {
      console.log(error);
    }
  },
};
