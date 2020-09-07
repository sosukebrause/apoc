import React from "react";

const Earthquake = (props) => {
  return (
    <div>
      <h2>Earthquake Data</h2>
      <h3>Place: {props.eqObj}</h3>
      <h3>Magnitude: {props.eqObj}</h3>
      <h3>Time of event: {props.eqObj}</h3>
    </div>
  );
};

export default Earthquake;
