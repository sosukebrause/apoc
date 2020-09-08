import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
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
  const [value, setValue] = useState(10);
  const [mapData, setMapData] = useState({
    lat: props.mapObj.lat,
    lng: props.mapObj.lng,
    zoom: 8,
  });

  const markers = props.eqData.map((element, index) => {
    return (
      <Marker key={index} position={[element.lat, element.lng]}>
        <Popup>{element.title}</Popup>
      </Marker>
    );
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
