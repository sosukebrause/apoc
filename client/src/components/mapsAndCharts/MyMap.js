import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer, CircleMarker } from "react-leaflet";
import { Button, Slider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./MyMap.css";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

const marks = [
  {
    value: 0,
    label: "2.5",
  },
  {
    value: 33,
    label: "5.0",
  },
  {
    value: 66,
    label: "7.5",
  },
  {
    value: 100,
    label: "10",
  },
];

const MyMap = (props) => {
  const classes = useStyles();
<<<<<<< HEAD
  const [value, setValue] = useState(2.5);
=======
  const [value, setValue] = useState(10);
  const [magValue, setMag] = useState(2.5);
>>>>>>> 28ba45418690ad3bcce2c3e5594777a7f353e35b
  const [mapData, setMapData] = useState({
    lat: props.mapObj.lat,
    lng: props.mapObj.lng,
    zoom: 8,
  });

  const handleChange = (event, newValue) => {
    let sliderValue = event.target.getAttribute("aria-valuenow");
    const newMagValue = (7.5 * sliderValue + 250) / 100;
    setMag(newMagValue);
    setValue(newValue);
  };

  const eqColor = (value) => {
    if (value >= 2.5 && value < 3.0) {
      return "yellow";
    } else if (value >= 3.0 && value < 4.5) {
      return "orange";
    } else {
      return "red";
    }
  };

  const markers = [];
  props.eqData.map((element, index) => {
    if (element.mag >= magValue) {
      markers.push(
        // <Marker key={index} position={[element.lat, element.lng]}>
        //   <Popup>{element.title}</Popup>
        // </Marker>

        // <CircleMarker center={position} color="red" radius={element}>
        //     <Popup>Popup in CircleMarker</Popup>
        //   </CircleMarker>
        <CircleMarker
          key={index}
          center={[element.lat, element.lng]}
          color={eqColor(element.mag)}
          radius={element.mag * 8}
        >
          <Popup>{element.title}</Popup>
        </CircleMarker>
      );
    }
  });

  const position = [props.mapObj.lat, props.mapObj.lng];

  return (
    <>
      <div className={classes.root}>
        <Typography id="discrete-slider-small-steps" gutterBottom>
          Earthquake Magnitude
        </Typography>
        <Slider
          style={{ marginLeft: "20px" }}
          color="primary"
          value={value}
          onChange={handleChange}
          marks={marks}
          track="inverted"
          aria-labelledby="continuous-slider"
        />
      </div>
      <div className="leaflet-container">
        Collapse
        <Map center={position} zoom={mapData.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          {markers}
        </Map>
      </div>
    </>
  );
};

export default MyMap;
