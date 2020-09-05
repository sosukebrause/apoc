import React from "react";

const Weather = (props) => {


    return (
        <div>
            <h3> Temp: {props.weatherObj.temp}</h3>
            <h3> UVI: {props.weatherObj.uvi}</h3>
            <h3> Humidity: {props.weatherObj.humidity}</h3>
            <h3> Wind_speed: {props.weatherObj.wind_speed}</h3>
        </div>
    )
}

export default Weather
