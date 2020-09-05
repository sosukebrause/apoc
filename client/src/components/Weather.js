import React from "react";

const Weather = (props) => {


    return (
        <div>
            <h3> Temp: {props.weatherObj.temp}</h3>
            <h3> UVI: {props.weatherObj.uvi}</h3>
        </div>
    )
}

export default Weather
