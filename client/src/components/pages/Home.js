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


const changeNumber = (e) => {
  // setNumDays({numDays, [e.target.name]: e.target.value});
  console.log(e.target)
  var numberDays = parseInt(e.target.value)
  // API.getCovidData(input.city, input.state_name, numberDays).then((res) => {

  // })
}



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
        
        <Search setGettingData = {setGettingData} handleCovidData={setCovidData} />
      {gettingData ? <h1>Loading</h1> : null} 
        {covidData.length > 0?
        <>
        <Chart data={covidData} title = {"hello"}/>
        <button variant="outlined" color="secondary" style = {buttonStyle} onClick={changeNumber} value = {7} >1 Week</button>
        <button variant="outlined" color="secondary" style = {buttonStyle} onClick={changeNumber} value = {30} >1 Month</button>
        <button variant="outlined" color="secondary" style = {buttonStyle} onClick={changeNumber} value = {60}>3 Months</button>
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
