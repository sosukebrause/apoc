import React from 'react'


const valueAvailable = (item) => item ? item : "not available";



const AirQuality = (props) => {


console.log(props.airObj)


    return (
        <div>
        <h3> Ozone: {valueAvailable(props.airObj.o3)}</h3>
        <h3> AQI: {valueAvailable(props.airObj.aqi)}</h3>
        <h3> Dominent Poll: {valueAvailable(props.airObj.dominentpol) }</h3>
        <h3> Corbon Monoxide: {valueAvailable(props.airObj.co)}</h3>
        <h3> Particle Matter: {valueAvailable(props.airObj.pm25)}</h3>
        <h3> Nitrogen Dioxide: {valueAvailable(props.airObj.no2)}</h3>
    </div>
    )
}

export default AirQuality
