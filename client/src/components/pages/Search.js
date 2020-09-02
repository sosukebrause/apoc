import React, { useState } from "react";
import { Input, Button } from '@material-ui/core';
import API from "../../utils/API";


const divStyle = {
  marginLeft: '60px',
};



const Search = (props) => {

// const [city, setCity] = useState("");
// const [state_name, setStateName] = useState("");
const [input, setInput] = useState({city: "", state_name: ""});

const handleChange = (e) => {
  setInput({...input, [e.target.name]: e.target.value});
}

const buttonSubmit = () => {
  console.log(input.city, input.state_name)
  API.getCovidData(input.city, input.state_name).then((res) => {
    console.log(res.data.data)
    var array = res.data.data
    var results = array.map( item => { 
    var covidObj = {
        totalInfected: item.confirmed,
       dailyInfected: item.confirmed_diff,
       totalDeaths: item.deaths,
       dailydeaths: item.deaths_diff,
       date: item.date,
     }
     return covidObj
    })
   
    props.handleCovidData(results)
    // console.log(res.data.data[0].confirmed, res.data.data[0].confirmed_diff, res.data.data[0].deaths, res.data.data[0].deaths_diff, res.data.data[0].date)
  }).catch(err => console.log(err))
}

// const handleCityChange = (e) => {
// console.log(e.target.value)
// setCity(e.target.value);
// }

// const handleStateChange = (e) => {
//   console.log(e.target.value)
//   setStateName(e.target.value);
//   }

  
  // useEffect(() => {
  //   loadCity();
  // }, []);

  // function loadCity() {
    
  
  // }

    return (
      <>
      <div className="form-group" style = {divStyle}>
      <h4 htmlFor="inputState">State Search</h4>
      {/* <select
        id="inputState"
        name = "state_name"
        className="form-control"
        onChange={handleChange}
      >
        <option></option>
        <option>Alabama</option>
        <option>Alaska</option>
        <option>Arizona</option>
        <option>Arkansas</option>
        <option>California</option>
        <option>Colorado</option>
        <option>Connecticut</option>
        <option>Delaware</option>
        <option>Florida</option>
        <option>Georgia</option>
        <option>Hawaii</option>
        <option>Idaho</option>
        <option>Illinois</option>
        <option>Indiana</option>
        <option>Iowa</option>
        <option>Kansas</option>
        <option>Kentucky</option>
        <option>Louisiana</option>
        <option>Maine</option>
        <option>Maryland</option>
        <option>Massachusetts</option>
        <option>Michigan</option>
        <option>Minnesota</option>
        <option>Mississippi</option>
        <option>Missouri</option>
        <option>Montana</option>
        <option>Nebraska</option>
        <option>Nevada</option>
        <option>New Hampshire</option>
        <option>New Jersey</option>
        <option>New Mexico</option>
        <option>New York</option>
        <option>North Carolina</option>
        <option>North Dakota</option>
        <option>Ohio</option>
        <option>Oklahoma</option>
        <option>Oregon</option>
        <option>Pennsylvania</option>
        <option>Rhode Island</option>
        <option>South Carolina</option>
        <option>South Dakota</option>
        <option>Tennessee</option>
        <option>Texas</option>
        <option>Utah</option>
        <option>Vermont</option>
        <option>Virginia</option>
        <option>Washington</option>
        <option>West Virginia</option>
        <option>Wisconsin</option>
        <option>Wyoming</option>
      </select> */}
    </div>
    <h4 style={divStyle} >City Search:</h4>
    <Input style = {divStyle}
      type="text"
      className="form-control"
      name = "city"
      id="search"
      placeholder="Type a city"
      onChange={handleChange}
    />
     <Input style = {divStyle}
      type="text"
      id="search"
      placeholder="Type a state"
      name = "state_name"
      className="form-control"
      onChange={handleChange}
    />
    <Button variant="outlined" onClick = {buttonSubmit}>submit</Button>
    </>
    )
}

export default Search
