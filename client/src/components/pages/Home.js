import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Form from "../card/AuthPost";
import Danger from "../Danger";
import Search from "./Search";
import Chart from "../mapsAndCharts/Chart";
import BarChart from "../mapsAndCharts/BarChart";
import { Button } from "@material-ui/core";
import Loading from "../Loading";
import API from "../../utils/API";
import { useUserContext } from "../context/UserContext";
import Weather from "../Weather";
import MyMap from "../mapsAndCharts/MyMap";
// import Earthquake from "../Earthquake";
import "./Home.css";
const maxDays = 60;
const AuxButton = (props) => {
  var array = props.options;
  let newItems = array.map((item, index) => {
    return (
      <Button
        onClick={props.handleAuxButton}
        variant="outlined"
        color="secondary"
        data-index={index}
        key={index}
      >
        {item.city}, {item.state_name}
      </Button>
    );
  });
  return newItems;
};
const Home = () => {
  const [covidData, setCovidData] = useState([]);
  const [loadingInfo, setLoadingInfo] = useState(false);
  // const [numDays, setNumDays] = useState(maxDays);
  const [weatherData, setWeatherData] = useState(null);
  const [airData, setAirData] = useState(null);
  const [suggestions, setSuggestionsData] = useState(null);
  const [mapInfo, setMapInfo] = useState(null);
  const [eqData, setEqData] = useState([]);
  // const [input, setInput] = useState({ city: "", state_name: "" });
  const handleAuxButton = (e) => {
    let value = suggestions[e.currentTarget.dataset.index];
    buttonSubmit(
      value.city,
      value.state_name,
      value.county,
      value.lat,
      value.lng
    );
  };
  //map Data function
  const loadMapData = (city, state_name, lat, lng) => {
    API.getMapData(city, state_name, lat, lng)
      .then((res) => {
        // console.log(res.data);
        var mapObj = res.data.data[0];
        setMapInfo(mapObj);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  //covid function
  const loadCovidData = (city, state_name, county) => {
    setLoadingInfo(true);
    setSuggestionsData(null);
    API.getCovidData(city, state_name, county, maxDays)
      .then((res) => {
        var array = res.data.data;
        var results = array.map((item) => {
          var covidObj = {
            // totalInfected: item.confirmed,
            dailyInfected: item.confirmed_diff,
            totalDeaths: item.deaths,
            dailydeaths: item.deaths_diff,
            date: item.date.split("-").slice(-2).join("/"),
          };
          return covidObj;
        });
        setCovidData(results);
        setLoadingInfo(false);
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.data && err.response.data.data) {
          setSuggestionsData(err.response.data.data);
        }
        setLoadingInfo(false);
      });
  };
  //Weather function
  const loadWeatherData = (city, state_name, lat, lng) => {
    API.getWeatherData(city, state_name, lat, lng)
      .then((res) => {
        // console.log(res.data);
        var data = res.data;
        var weatherObj = {
          temp: data.data.current.temp,
          humidity: data.data.current.humidity,
          uvi: data.data.current.uvi,
          wind_speed: data.data.current.wind_speed,
        };
        setWeatherData(weatherObj);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const loadEarthquakes = (city, state_name, lat, lng) => {
    API.getEarthquakeData(city, state_name, lat, lng)
      .then((res) => {
        console.log(res.data);
        // var eqObj = {
        //   place: res.data.place,
        //   time: res.data.time,
        //   magnitude: res.data.properties.mag,
        // };
        setEqData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Air Quality function
  const loadAirData = (city, state_name, lat, lng) => {
    API.getAirData(city, state_name, lat, lng)
      .then((res) => {
        var data = res.data;
        if (data.data) {
          var airObj = {
            aqi: data.data.data.aqi ? data.data.data.aqi : null,
            dominentpol: data.data.data.dominentpol
              ? data.data.data.dominentpol
              : null,
            co: data.data.data.iaqi.co ? data.data.data.iaqi.co.v : null,
            no2: data.data.data.iaqi.no2 ? data.data.data.iaqi.no2.v : null,
            o3: data.data.data.iaqi.o3 ? data.data.data.iaqi.o3.v : null,
            pm25: data.data.data.iaqi.pm25 ? data.data.data.iaqi.pm25.v : null,
          };
          setAirData(airObj);
        }
      })
      .catch((err) => {
        console.log(err.response);
        var airObj = {
          aqi: 72,
          dominentpol: 30,
          co: 25,
          no2: 34,
          o3: 60,
          pm25: 30,
        };
        setAirData(airObj);
      });
  };
  const buttonSubmit = (city, state_name, county, lat, lng) => {
    loadWeatherData(city, state_name, lat, lng);
    loadAirData(city, state_name, lat, lng);
    loadCovidData(city, state_name, county);
    loadMapData(city, state_name, lat, lng);
    loadEarthquakes(city, state_name, lat, lng);
  };
  const { userData } = useUserContext();
  return (
    <div className="page">
      <>
        {/*{!userData.user ? (
        <></>
      ) : ( {loadingInfo ? null : <h3 style = {{marginLeft: "20px"}}>Welcome {userData.user.displayName}</h3>} */}

        <Search
          className="search"
          buttonSubmit={buttonSubmit}
          loadingInfo={loadingInfo}
        />
        {suggestions ? (
          <AuxButton handleAuxButton={handleAuxButton} options={suggestions} />
        ) : null}
        {loadingInfo ? <Loading /> : null}
        <div className="weather">
          {weatherData && (
            <Weather
              weatherObj={weatherData}
              style={{ height: "300px", width: "50%" }}
            />
          )}
          {airData && (
            <div style={{ height: "300px", width: "50%" }}>
              <BarChart airObj={airData} />
            </div>
          )}
        </div>

        {covidData.length > 0 ? (
          <>
            <br></br>
            <br></br>
            <div>
              <Chart
                data={covidData}
                loadingInfo={loadingInfo}
                style={{ width: "100%" }}
              />
              <div style={{ width: "50%" }}>
                {mapInfo && <MyMap mapObj={mapInfo} eqData={eqData} />}
                {/* <MyMap /> */}
              </div>
            </div>

            <br></br>

            {/* <Danger /> */}
          </>
        ) : null}
        {/* <Form inputName={"todoText"} /> */}
      </>
      {/* )} */}
    </div>
  );
};
export default Home;
