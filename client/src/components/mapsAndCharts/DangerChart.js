import React from "react";
import GaugeChart from "react-gauge-chart";

const Danger = (props) => {
  return (
    <>
      <div style={{ height: "45%", width: "45%", marginBottom: "50px" }}>
        <GaugeChart id="gauge-chart2" nrOfLevels={20} percent={0.86} />
      </div>
    </>
  );
};

export default Danger;
