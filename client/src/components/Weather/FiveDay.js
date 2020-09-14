import React from "react";
import { Card, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Sun from "./images/sun.png";
import Cloud from "./images/cloud.png";
import Rain from "./images/rain.png";
import Snow from "./images/snow.png";
import Haze from "./images/haze.png";
import Smog from "./images/smog.png";
import "./Weather.css";


const tempConversion = (temp) => ((temp - 273.0) * 1.8 + 32).toFixed(1)

const convertDateFormat = (date) => {
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    return `${month.length === 1 ? "0" + month : month}/${
        day.length === 1 ? "0" + day : day
        }`;
};

const weatherIcon = (icon) => {
    if (icon === "Clear" || icon === "Sunny") {
        return <img src={Sun} alt="not working" />
    } else if (icon === "Clouds") {
      return  <img src={Cloud} alt="not working" />
    } else if (icon === "Rain") {
       return <img src={Rain} alt="not working" />
    }
    else if (icon === "Snow") {
      return  <img src={Snow} alt="not working" />
    }
     else if (icon === "Fog" || icon === "Foggy" || icon === "Smog") {
       return <img src={Smog} alt="not working" />
    }
    else if (icon === "Haze" || icon === "Smoke") {
     return   <img src={Haze} alt="not working" />
    }
    else {
      return  <img src={Sun} alt="not working" />
    }
};



const FiveDay = (props) => {


    return (
        <>
            <div>
            <Card id = "card" style = {{width: "520px", height: "530px"}} variant="outlined" >
                <Typography variant="h4" component="h4">
                <p>5 Day Forecast</p>
                </Typography>
                <div id = "fiveDay">
                <Typography variant="caption" component="h4" size = "1.3rem" color="textSecondary">
                {convertDateFormat(new Date(props.weatherObj.day2))}: {tempConversion(props.weatherObj.weather2)}°F  {weatherIcon(props.weatherObj.main2)}
                {convertDateFormat(new Date(props.weatherObj.day3))}: {tempConversion(props.weatherObj.weather3)}°F  {weatherIcon(props.weatherObj.main3)}
                {convertDateFormat(new Date(props.weatherObj.day4))}: {tempConversion(props.weatherObj.weather4)}°F  {weatherIcon(props.weatherObj.main4)}
                {convertDateFormat(new Date(props.weatherObj.day5))}: {tempConversion(props.weatherObj.weather5)}°F  {weatherIcon(props.weatherObj.main5)}        
                {convertDateFormat(new Date(props.weatherObj.day6))}: {tempConversion(props.weatherObj.weather6)}°F {weatherIcon(props.weatherObj.main6)}
                </Typography>
                </div>
                </Card>
            </div>
        </>
    )
}

export default FiveDay

