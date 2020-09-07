import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./MyMap.css";

const MyMap = (props) => {
  const [mapData, setMapData] = useState({
    lat: props.mapObj.lat,
    lng: props.mapObj.lng,
    zoom: 8,
  });

  const position = [props.mapObj.lat, props.mapObj.lng];

  return (
    <div className="leaflet-container">
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
      </Map>
    </div>
  );
};

export default MyMap;
