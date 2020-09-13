import React, { useState } from "react";
import Header from "../Header"
import DangerChart from "../mapsAndCharts/DangerChart";
import Search from "./Search";
import Chart from "../mapsAndCharts/Chart";
import BarChart from "../mapsAndCharts/BarChart";
import { Button } from "@material-ui/core";
import Loading from "../Loading";
import API from "../../utils/API";
import FeedList from "../feed/FeedList";
import Weather from "../Weather/Weather";
import MyMap from "../mapsAndCharts/MyMap";
import CityName from "../CityName";

import "./Home.css";
const maxDays = 60;
const SuggestionsButton = (props) => {
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
  const [weatherData, setWeatherData] = useState(null);
  const [airData, setAirData] = useState(null);
  const [suggestions, setSuggestionsData] = useState(null);
  const [mapInfo, setMapInfo] = useState(null);
  const [feedData, setFeed] = useState([]);
  const [eqData, setEqData] = useState([]);
  const [dangerData, setDangerData] = useState(null);

  React.useEffect(() => {
    let mapStorage = localStorage.getItem("mapStorage")
    if (mapStorage) {
      mapStorage = JSON.parse(mapStorage)
      console.log(mapStorage)
      buttonSubmit(mapStorage.city, mapStorage.state_name, mapStorage.county, mapStorage.lat, mapStorage.lng);
    }
  }, [])


  React.useEffect(() => {
    if (covidData.data) {
      dangerLevel()
    }
  }, [covidData])

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
        localStorage.setItem("mapStorage", JSON.stringify(mapObj))
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
        dangerLevel();
      })
      .catch((err) => {
        // console.log(err.response);
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
        var data = res.data;
        var weatherObj = {
          temp: data.data.current.temp,
          humidity: data.data.current.humidity,
          uvi: data.data.current.uvi,
          wind_speed: data.data.current.wind_speed,
          todayIcon: data.data.current.weather[0].main,
          weather2: data.data.daily[1].temp.day,
          main2: data.data.daily[1].weather[0].main,
          day2: data.data.daily[1].dt * 1000,
          weather3: data.data.daily[2].temp.day,
          main3: data.data.daily[2].weather[0].main,
          day3: data.data.daily[2].dt * 1000,
          weather4: data.data.daily[3].temp.day,
          main4: data.data.daily[3].weather[0].main,
          day4: data.data.daily[3].dt * 1000,
          weather5: data.data.daily[4].temp.day,
          main5: data.data.daily[4].weather[0].main,
          day5: data.data.daily[4].dt * 1000,
          weather6: data.data.daily[5].temp.day,
          main6: data.data.daily[5].weather[0].main,
          day6: data.data.daily[5].dt * 1000,
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
        // console.log(res.data);
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
        // console.log(err.response);
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

  const dangerLevel = () => {
    let danger = covidData.data
    console.log(danger)
    setDangerData(danger)
  }

  const buttonSubmit = ((city, state_name, county, lat, lng) => {
    loadWeatherData(city, state_name, lat, lng);
    loadAirData(city, state_name, lat, lng);
    loadCovidData(city, state_name, county);
    loadMapData(city, state_name, lat, lng);
    loadEarthquakes(city, state_name, lat, lng);
    loadFeedData(city, state_name, county);
  })

  const loadFeedData = (city, state_name, county) => {
    API.getFeedData(city, state_name, county)
      .then((res) => {
        console.log("feed", res.data.data);
        setFeed(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="page">
      <>
        <Header />
        <Search
          className="search"
          buttonSubmit={buttonSubmit}
          loadingInfo={loadingInfo}
        />

        {suggestions ? (
          <SuggestionsButton handleAuxButton={handleAuxButton} options={suggestions} />
        ) : null}
        <div id="loader">{loadingInfo ? <Loading /> : null}</div>
        {(!loadingInfo) ? (
          <>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {mapInfo && <CityName id="cityName" mapObj={mapInfo} />}
              <DangerChart danger= {dangerData}/>
            </div>
            <div className="mapAndFeed">
              <div style={{ width: "50%", marginLeft: "20px" }}>
                {mapInfo && <MyMap mapObj={mapInfo} eqData={eqData} />}
              </div>
              {mapInfo && <FeedList mapInfo={mapInfo} feedData={feedData} />}
            </div>
            <br></br>
            <div>
              <Chart
                data={covidData}
                loadingInfo={loadingInfo}
                style={{ width: "100%" }}
              />
            </div>
            <br></br>
            <div className="weather">
              {weatherData && (
                <Weather
                  weatherObj={weatherData}
                  style={{ height: "350px", width: "50%" }}
                />
              )}
              {airData && (
                <div style={{ height: "350px", width: "50%" }}>
                  <BarChart airObj={airData} />
                </div>
              )}
            </div>
          </>
        ) : null}
      </>
    </div>
  );
};
export default Home;
