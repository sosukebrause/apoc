import React from "react";
import { Card } from '@material-ui/core';

const tempConversion = (temp) => ((temp -273.0) * 1.8 + 32).toFixed(1)



const Weather = (props) => {

    
    return (
        <>
        <div >
        <h3 style = {{marginLeft: "50px"}}>Current Weather</h3>
        <Card variant = "outlined" >
            <h4> Temp: {tempConversion(props.weatherObj.temp)}°F</h4>
            <h4> UVI: {props.weatherObj.uvi}</h4>
            <h4> Humidity: {props.weatherObj.humidity}</h4>
            <h4> Wind_speed: {props.weatherObj.wind_speed}</h4>
            <br></br>
        </Card>
     </div>
    <div>
        <h3>5 Day Forecast</h3>
        <h4>Day2: {tempConversion(props.weatherObj.weather2)}°F</h4>
        <h4>Day3: {tempConversion(props.weatherObj.weather3)}°F</h4>
        <h4>Day4: {tempConversion(props.weatherObj.weather4)}°F</h4>
        <h4>Day5: {tempConversion(props.weatherObj.weather5)}°F</h4>
        <h4>Day6: {tempConversion(props.weatherObj.weather6)}°F</h4>
    </div>
        </>
    )
}

export default Weather
