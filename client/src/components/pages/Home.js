import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../card/AuthPost";
import Danger from "../Danger";
import Search from "./Search";
import Chart from "../Chart";

import { useUserContext } from "../context/UserContext";

const data = [
  { argument: 1, value: 10 },
  { argument: 2, value: 20 },
  { argument: 3, value: 30 },
];


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

const Home = () => {

const [covidData, setCovidData] = useState([]);


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
    <h3>Welcome {userData.user.displayName}</h3>
        
        <Search handleCovidData={setCovidData} />
        {covidData.length > 0?
        <>
        <Chart data={covidData} title = {"hello"}/>
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
