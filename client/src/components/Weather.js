import React from "react";
import { Card } from '@material-ui/core';
import Sun from "../images/sun.png";
import Cloud from "../images/cloud.png"
import Rain from "../images/rain.png";
import Snow from "../images/snow.png";
import Haze from "../images/haze.png";
import Smog from "../images/smog.png";


const tempConversion = (temp) => ((temp - 273.0) * 1.8 + 32).toFixed(1)

const convertDateFormat = (date) => {
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    return `${month.length === 1 ? "0" + month : month}/${
        day.length === 1 ? "0" + day : day
        }`;
};


// const weatherIcon = (icon) => {
//     if (icon = "Clear" || "Sunny") {
//       <img src = {Sun} alt = "not working"/> 
//     } else if (icon = "Clouds") {
//       <img src = {Cloud} alt = "not working" />
//     } else if (icon = "Rain") {
//      <img src = {Rain} alt = "not working" />
//     }
//     else if (icon = "Snow") {
//         <img src = {Snow} alt = "not working"/>
//       }
//       else if (icon = "Fog" || "Foggy" || "Smog") {
//         <img src = {Smog} alt = "not working"/>
//       }
//       else if (icon = "Haze" || "Smoke") {
//         <img src = {Haze} alt = "not working"/>
//       }
//       else {
//         <img src = {Sun} alt = "not working"/> 
//       }
//   };


const Weather = (props) => {


    return (
        <>
            <div >
                <h3 style={{ marginLeft: "50px" }}>Current Weather</h3>
                <Card variant="outlined" >
                    <h4> Temp: {tempConversion(props.weatherObj.temp)}°F</h4>
                    <h4> UVI: {props.weatherObj.uvi}</h4>
                    <h4> Humidity: {props.weatherObj.humidity}</h4>
                    <h4> Wind_speed: {props.weatherObj.wind_speed}</h4>
                    <br></br>
                </Card>
            </div>
            <div>
                <br></br>
                <h3>5 Day Forecast</h3>
                <br></br>
                <h4>{convertDateFormat(new Date(props.weatherObj.day2))}: {tempConversion(props.weatherObj.weather2)}°F , {props.weatherObj.main2}</h4>
                <h4>{convertDateFormat(new Date(props.weatherObj.day3))}: {tempConversion(props.weatherObj.weather3)}°F , {props.weatherObj.main3}</h4>
                <h4>{convertDateFormat(new Date(props.weatherObj.day4))}: {tempConversion(props.weatherObj.weather4)}°F , {props.weatherObj.main4}</h4>
                <h4>{convertDateFormat(new Date(props.weatherObj.day5))}: {tempConversion(props.weatherObj.weather5)}°F , {props.weatherObj.main5}</h4>
                <h4>{convertDateFormat(new Date(props.weatherObj.day6))}: {tempConversion(props.weatherObj.weather6)}°F , {props.weatherObj.main6}</h4>

            </div>
        </>
    )
}

export default Weather
