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



const Weather = (props) => {


    return (
        <>
            <div >
            
                <Card id = "card" style = {{width: "300px", height: "530px"}} variant="outlined" >
                <Typography variant="h4" component="h4">
                <p style={{textAlign: "center"}}>Current Weather</p>
                </Typography>
                    <h4> Temp: {tempConversion(props.weatherObj.temp)}°F</h4>
                    <h4> UVI: {props.weatherObj.uvi}</h4>
                    <h4> Humidity: {props.weatherObj.humidity}</h4>
                    <h4> Wind_speed: {props.weatherObj.wind_speed}</h4>
                    <div>{weatherIcon(props.weatherObj.todayIcon)}</div>
                    <br></br>
                </Card>
            </div>
        </>
    )
}

export default Weather

