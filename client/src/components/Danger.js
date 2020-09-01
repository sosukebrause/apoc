import React from 'react'
import ReactSpeedometer from "react-d3-speedometer";

const Danger = () => {
    return (
        <>
            <ReactSpeedometer
  value={670}
  currentValueText="Danger Level"
  startColor="green"
  segments={10}
  endColor="red"
  needleColor="steelblue"
  needleTransitionDuration={5000}
  needleTransition="easeElastic"
/>
</>
    )
}

export default Danger
