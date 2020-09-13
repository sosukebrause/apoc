import React from 'react'
import Typography from "@material-ui/core/Typography";

const CityName = (props) => {
    return (
        <div>
            <Typography variant="h3" component="h3">
            <p style = {{marginBottom: "50px"}}>{props.mapObj.city}, {props.mapObj.state_name}</p>
            </Typography>
          
        </div>
    )
}

export default CityName;
