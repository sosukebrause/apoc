import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./MyMap.css"

const MyMap = (props) => {

const [mapData, setMapData] = useState( {
    lat: 51.505,
    lng: -0.09,
    zoom: 13
  }
);

const position = [mapData.lat, mapData.lng];

    return (
      <div className = "leaflet-container">
  <Map center={position} zoom={mapData.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
     </Map>
      </div>
    );
  };
  
  export default MyMap;
  