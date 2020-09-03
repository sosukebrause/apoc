import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../card/AuthPost";
import Danger from "../Danger";
import Search from "./Search";
import Chart from "../Chart";
import { Button } from '@material-ui/core';
import API from "../../utils/API";
import { useUserContext } from "../context/UserContext";


// class Home extends React.Component {
//   constructor(props) {
//     state = {
//       covidData : []
//     }
//   }

//   handleCovidData = data => {
//     this.setState({
//       covidData: data
//     })
//   }
// }

const buttonStyle = {
  marginLeft: '10px',
};

const Home = () => {

const [covidData, setCovidData] = useState([]);
const [gettingData, setGettingData] = useState(false);
const [numDays, setNumDays] = useState(60);
const [input, setInput] = useState({ city: "", state_name: "" });


const changeNumber = (e) => {
  // setNumDays({numDays, [e.target.name]: e.target.value});
  console.log(e.currentTarget.value)
  var numberDays = parseInt(e.currentTarget.value)
  // API.getCovidData(input.city, input.state_name, numberDays).then((res) => {
  buttonSubmit(numberDays);
  // })
}

const handleChange = (e) => {
  setInput({ ...input, [e.target.name]: e.target.value });
  
};

const buttonSubmit = (num = 7) => {
  console.log(input.city, input.state_name);
  setGettingData(true);
  API.getCovidData(input.city, input.state_name, num)
    .then((res) => {
      console.log(res.data.data);
      var array = res.data.data;
      var results = array.map((item) => {
        var covidObj = {
          totalInfected: item.confirmed,
          dailyInfected: item.confirmed_diff,
          totalDeaths: item.deaths,
          dailydeaths: item.deaths_diff,
          date: item.date,
        };
        return covidObj;
      });

      setCovidData(results);
      setGettingData(false);
      // console.log(res.data.data[0].confirmed, res.data.data[0].confirmed_diff, res.data.data[0].deaths, res.data.data[0].deaths_diff, res.data.data[0].date)
    })
    .catch((err) => console.log(err));
};



  const { userData } = useUserContext();
  console.log(userData);
  console.log("CovidData", covidData);
  return (
    <div className="page">
      {!userData.user ? (
        <>
      
        </>
      ) : (
        <>
    {gettingData? null : <h3>Welcome {userData.user.displayName}</h3>}
        
        <Search buttonSubmit = {buttonSubmit} gettingData = {gettingData} handleChange = {handleChange}/>
      {gettingData ? <h1>Loading</h1> : null} 
        {covidData.length > 0?
        <>
        <Chart data={covidData} title = {"hello"}/>
        <Button variant="outlined" color="secondary" style = {buttonStyle} onClick={changeNumber} value = {7} >1 Week</Button>
        <Button variant="outlined" color="secondary" style = {buttonStyle} onClick={changeNumber} value = {30} >1 Month</Button>
        <Button variant="outlined" color="secondary" style = {buttonStyle} onClick={changeNumber} value = {60}>2 Months</Button>
        <br></br>
        <Danger/>
        </> : null
      }
        {/* <Form inputName={"todoText"} /> */}
        
      
        </>
      )}
    </div>
  );
};
export default Home;
