import React from 'react'
import Typography from "@material-ui/core/Typography";

const CityName = (props) => {
    return (
        <div>
            <h1 style = {{marginBottom: "50px"}}>{props.mapObj.city}, {props.mapObj.state_name}</h1>
        </div>
    )
}

export default CityName;
