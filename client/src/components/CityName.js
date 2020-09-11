import React from 'react'
import Typography from "@material-ui/core/Typography";

const CityName = (props) => {
    return (
        <div>
            <h2>{props.mapObj.city}, {props.mapObj.state_name}</h2>
        </div>
    )
}

export default CityName;
