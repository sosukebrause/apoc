import React from "react";
import { Card } from '@material-ui/core';


const tempConversion = (temp) => ((temp -273.0) * 1.8 + 32).toFixed(1)



const Weather = (props) => {

    
    return (
        <>
        <div style = {{width: "400px", height: "250px"}}>
        <h3 style = {{marginLeft: "50px"}}>Current Weather</h3>
        <Card variant = "outlined" >
            <h4> Temp: {tempConversion(props.weatherObj.temp)}°F</h4>
            <h4> UVI: {props.weatherObj.uvi}</h4>
            <h4> Humidity: {props.weatherObj.humidity}</h4>
            <h4> Wind_speed: {props.weatherObj.wind_speed}</h4>
            <br></br>
       
        </Card>
    
        </div>
    
        </>
    )
}

export default Weather
