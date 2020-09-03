import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
// import API from "../../utils/API";

const divStyle = {
  marginLeft: "60px",
};

const Search = (props) => {
  // const [city, setCity] = useState("");
  // const [state_name, setStateName] = useState("");
  // const [input, setInput] = useState({ city: "", state_name: "" });

  // const handleChange = (e) => {
  //   setInput({ ...input, [e.target.name]: e.target.value });
  // };

  // const buttonSubmit = () => {
  //   console.log(input.city, input.state_name);
  //   props.setGettingData(true);
  //   API.getCovidData(input.city, input.state_name)
  //     .then((res) => {
  //       console.log(res.data.data);
  //       var array = res.data.data;
  //       var results = array.map((item) => {
  //         var covidObj = {
  //           totalInfected: item.confirmed,
  //           dailyInfected: item.confirmed_diff,
  //           totalDeaths: item.deaths,
  //           dailydeaths: item.deaths_diff,
  //           date: item.date,
  //         };
  //         return covidObj;
  //       });

  //       props.handleCovidData(results);
  //       props.setGettingData(false);
  //       // console.log(res.data.data[0].confirmed, res.data.data[0].confirmed_diff, res.data.data[0].deaths, res.data.data[0].deaths_diff, res.data.data[0].date)
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const handleCityChange = (e) => {
  // console.log(e.target.value)
  // setCity(e.target.value);
  // }

  // const handleStateChange = (e) => {
  //   console.log(e.target.value)
  //   setStateName(e.target.value);
  //   }

  return (
    <>
      <div className="form-group" style={divStyle}></div>
      {/* <h4 style={divStyle} >City Search:</h4> */}
      <Input
        style={divStyle}
        type="text"
        className="form-control"
        name="city"
        id="search"
        placeholder="Type a city"
        onChange={props.handleChange}
      />
      <Input
        style={divStyle}
        type="text"
        id="search"
        placeholder="Type a state"
        name="state_name"
        className="form-control"
        onChange={props.handleChange}
      />
      <Button variant="outlined" onClick={props.buttonSubmit}>
        submit
      </Button>
    </>
  );
};

export default Search;
