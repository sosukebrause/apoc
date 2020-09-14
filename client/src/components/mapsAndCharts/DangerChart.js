import React from "react";
import GaugeChart from "react-gauge-chart";

const Danger = (props) => {
  return (
    <>
      <div
        style={{
          height: "45%",
          width: "45%",
          marginBottom: "50px",
          background: "grey",
        }}
      >
        <GaugeChart
          id="gauge-chart2"
          nrOfLevels={30}
<<<<<<< HEAD
          hideText = {true}
          percent={props.danger/100}
=======
          percent={props.danger / 100}
>>>>>>> b3c96c2a160fe75b20b8d85fe4abe3af76bae389
        />
      </div>
    </>
  );
};

export default Danger;
