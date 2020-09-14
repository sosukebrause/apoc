import React from "react";
import GaugeChart from "react-gauge-chart";

const Danger = (props) => {
  return (
    <>
<<<<<<< HEAD
      <div style={{ height: "45%", width: "45%", marginBottom: "50px" }}>
        <GaugeChart id="gauge-chart2" nrOfLevels={20} percent={0.86} />
=======
      <div style = {{height: "45%", width: "45%", marginBottom: "50px"}}>
        <GaugeChart  id="gauge-chart2"
          nrOfLevels={30}
          percent={props.danger/100}
        />
>>>>>>> 9ec5fb9e005d2cc68df9ac896f14e2e3f2e3fc0b
      </div>
    </>
  );
};

export default Danger;
