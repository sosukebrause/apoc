import React, { useState } from "react";
import Header from "../Header";
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
import ThemeProvider from "../ThemeProvider";

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

const initData = {
  air: null,
  covid: [],
  mapp: null,
  eq: [],
  feed: [],
  weather: null,
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
  const [allData, setAllData] = useState(initData);

  React.useEffect(() => {
    let mapStorage = localStorage.getItem("mapStorage");
    if (mapStorage) {
      mapStorage = JSON.parse(mapStorage);
      console.log(mapStorage);
      buttonSubmit(
        mapStorage.city,
        mapStorage.state_name,
        mapStorage.county,
        mapStorage.lat,
        mapStorage.lng
      );
    }
  }, []);

  const handleAuxButton = (e) => {
    let value = suggestions[e.currentTarget.dataset.index];
    buttonSubmit(
      value.city,
      value.state_name,
      value.coxunty,
      value.lat,
      value.lng
    );
  };

  //map Data function
  const loadMapData = (city, state_name, county, lat, lng) => {
    return new Promise((resolve, reject) => {
      API.getMapData(city, state_name, county, lat, lng)
        .then((res) => {
          var mapObj = res.data.data[0];
          localStorage.setItem("mapStorage", JSON.stringify(mapObj));
          resolve(mapObj);
        })
        .catch((err) => {
          reject(err.response);
        });
    });
  };
  //covid function
  const loadCovidData = (city, state_name, county) => {
    return new Promise((resolve, reject) => {
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
          resolve(results);
        })
        .catch((err) => {
          reject(err.response);
        });
    });
  };
  //Weather function
  const loadWeatherData = (city, state_name, lat, lng) => {
    return new Promise((resolve, reject) => {
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
          resolve(weatherObj);
        })
        .catch((err) => {
          reject(err.response);
        });
    });
  };

  const loadEarthquakes = (city, state_name, lat, lng) => {
    return new Promise((resolve, reject) => {
      API.getEarthquakeData(city, state_name, lat, lng)
        .then((res) => {
          // console.log(res.data);
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response);
        });
    });
  };
  //Air Quality function
  const loadAirData = (city, state_name, lat, lng) => {
    return new Promise((resolve, reject) => {
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
              pm25: data.data.data.iaqi.pm25
                ? data.data.data.iaqi.pm25.v
                : null,
            };
            resolve(airObj);
          }
        })
        .catch((err) => {
          reject(err.response);
        });
    });
  };

  const loadFeedData = (city, state_name, county) => {
    return new Promise((resolve, reject) => {
      API.getFeedData(city, state_name, county)
        .then((res) => {
          console.log("feed", res.data.data);
          resolve(res.data.data);
        })
        .catch((err) => {
          reject(err.response);
        });
    });
  };

  const dangerLevel = () => {
    let danger = allData.covid[allData.covid.length - 1].totalDeaths;
    setDangerData(danger);
  };

  const buttonSubmit = (city, state_name, county, lat, lng) => {
    setLoadingInfo(true);
    setSuggestionsData(null);
    Promise.all(
      [
        loadAirData(city, state_name, lat, lng),
        loadCovidData(city, state_name, county),
        loadMapData(city, state_name, lat, lng),
        loadEarthquakes(city, state_name, lat, lng),
        loadFeedData(city, state_name, county),
        loadWeatherData(city, state_name, lat, lng),
      ].map((promise) =>
        promise
          .then((ok) => {
            return { success: true, data: ok };
          })
          .catch((err) => {
            return { success: false, message: err };
          })
      )
    )
      .then((values) => {
        console.log(values);
        if (values.length !== 6) {
          setLoadingInfo(false);
          return;
        }
        if (!values[0].success && values[0].message && values[0].message.data) {
          setLoadingInfo(false);
          setSuggestionsData(values[0].message.data.data);
          return;
        }
        let dataObj = initData;
        if (values[0].success) dataObj.air = values[0].data;
        if (values[1].success) dataObj.covid = values[1].data;
        if (values[2].success) dataObj.mapp = values[2].data;
        if (values[3].success) dataObj.eq = values[3].data;
        if (values[4].success) dataObj.feed = values[4].data;
        if (values[5].success) dataObj.weather = values[5].data;
        setAllData(dataObj);
        dangerLevel();
        setLoadingInfo(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingInfo(false);
      });
  };

  console.log("danger", dangerData);
  return (
    <div className="page">
      <>
        {/* <ThemeProvider> */}
        <Header />
        <Search
          className="search"
          buttonSubmit={buttonSubmit}
          loadingInfo={loadingInfo}
        />

        {suggestions ? (
          <SuggestionsButton
            handleAuxButton={handleAuxButton}
            options={suggestions}
          />
        ) : null}
        <div id="loader">{loadingInfo ? <Loading /> : null}</div>
        {!loadingInfo ? (
          <>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {allData.mapp && <CityName id="cityName" mapObj={allData.mapp} />}
              {dangerData && <DangerChart danger={dangerData} />}
            </div>
            <div className="mapAndFeed">
              <div style={{ width: "50%", marginLeft: "20px" }}>
                {allData.mapp && (
                  <MyMap mapObj={allData.mapp} eqData={allData.eq} />
                )}
              </div>
              {allData.mapp && (
                <FeedList mapInfo={allData.mapp} feedData={allData.feed} />
              )}
            </div>
            <br></br>
            <div>
              {allData.mapp && (
                <Chart data={allData.covid} style={{ width: "100%" }} />
              )}
            </div>
            <br></br>
            <div className="weather">
              {allData.weather && (
                <Weather
                  weatherObj={allData.weather}
                  style={{ height: "350px", width: "50%" }}
                />
              )}
              {allData.air && (
                <div style={{ height: "350px", width: "50%" }}>
                  <BarChart airObj={allData.air} />
                </div>
              )}
            </div>
          </>
        ) : null}
        {/* </ThemeProvider> */}
      </>
    </div>
  );
};
export default Home;
