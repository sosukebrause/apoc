import React from "react";


const tempConversion = (temp) => ((temp -273.0) * 1.8 + 32).toFixed(1)



const Weather = (props) => {

    

    return (
        <div>
            <h3> Temp: {tempConversion(props.weatherObj.temp)}°F</h3>
            <h3> UVI: {props.weatherObj.uvi}</h3>
            <h3> Humidity: {props.weatherObj.humidity}</h3>
            <h3> Wind_speed: {props.weatherObj.wind_speed}</h3>
        </div>
    )
}

export default Weather
