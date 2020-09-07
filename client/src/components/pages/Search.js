import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
// import API from "../../utils/API";

const divStyle = {
  marginLeft: "60px",
};

const Search = (props) => {

  const [input, setInput] = useState({ city: "", state_name: "" });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    
  };

  const buttonSubmit = () => {
    console.log(input);
    props.buttonSubmit(input.city, input.state_name, null)
    setInput({city: "", state_name: ""});
  }
 
  return (
    <>
      <div className="form-group" style={divStyle}></div>
      {/* <h4 style={divStyle} >City Search:</h4> */}
      <Input
      disabled = {props.loadingInfo}
        style={divStyle}
        type="text"
        className="form-control"
        name="city"
        id="search"
        placeholder="Type a city"
        onChange={handleChange}
        value = {input.city}
        
      />
      <Input
        disabled = {props.loadingInfo}
        style={divStyle}
        type="text"
        id="search"
        placeholder="Type a state"
        name="state_name"
        className="form-control"
        onChange={handleChange}
        value = {input.state_name}
      />
      <Button variant="contained" color = "primary" size = "small" disabled = {props.loadingInfo} onClick={buttonSubmit}>
        Enter
      </Button>
    </>
  );
};

export default Search;
