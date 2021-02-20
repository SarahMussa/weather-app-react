import React, { useState } from "react";
import { Container, Row, Col } from 'react-grid-system';

import "./Weather.css";
import SearchEngine from "./SearchEngine";
import HourForecast from "./HourForecast";
import Forecast from "./Forecast";
import axios from "axios";


export default function Weather() {
  const [Ready, setReady]=useState(false);
  const [Data, setData]=useState({});

  function handleResponse(response){
    console.log(response.data)
    setData({
    city: response.data.main.name,
    temp: response.data.main.temp,
    tempMax: response.data.main.temp_max,
    tempMin: response.data.main.temp_min,
    feelslike: response.data.main.feels_like,
    date: "Sunday, January 3",
    currentHour: "12:00",
    description: response.data.weather[0].description,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    uvi: "2 of 10",
    sunrise: "08:00",
    sunset: "20:00"

    })
    setReady (true);
  }

  

  if (Ready){
return (
    <Container>
      <br />
      <Row>
        <Col>
          <SearchEngine />
        </Col>
        <Col>
          <button className="currentLocation">
            <span aria-label="emoji" role="img">
              📍{" "}
            </span>{" "}
            Current Location
          </button>
          <div className="cf">
            <button className="units">
              <span className="Clink">°C</span>
              {" "}
              |
              <span className="Flink">
                °F
              </span>
            </button>
            </div>
            <button className="ampm">Am/Pm</button>
        </Col>
      </Row>

      <Row className="app">
        <Col className="left">
          <Row className="city">
            <Col>
              <h1 className="searchedCity">{Data.city}</h1>
              <p className="currentDate">{Data.date}</p>
              <p>Sunrise - {Data.sunrise}</p>
              <p>Sunset - {Data.sunset}</p>
            </Col>
            <Col>
              <p>
                <img src={Data.icon} alt="sunny" className="dailyIcon" />
              </p>
              <h3 className="temperature today">
                <strong> {Math.round(Data.tempMax)}° </strong>/{Math.round(Data.tempMin)}°
                <span className="temperatureUnit">C</span>
              </h3>
            </Col>
          </Row>

          <Row className="currently">
            <Col>
              <p className="currentHour">{Data.currentHour}</p>
              <br />
              <p className="text-capitalize">{Data.description}</p>
              <img src={Data.icon} alt={Data.description} className="iconNow" />
            </Col>
            <Col>
              <h3>
                <strong className="temperature today">
                  {Math.round(Data.temp)}
                  <span className="temperatureUnit">° C</span>
                </strong>
              </h3>
              <p>
                Feels like <strong>{(Math.round(Data.feelslike))}</strong>°
              </p>
              <br />
              <p>Wind {Math.round(Data.wind)} km/h</p>
              <p>Humidity {Data.humidity} %</p>
              <p>UV Index {Data.uvi}</p>
            </Col>
          </Row>
        </Col>

        <Col className="right">
            <HourForecast />
            <Forecast />
        </Col>
      </Row>
    </Container>
  );
  }else{
    const apiKey ="8430d97c754240b31c1a7afacb15800d";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${apiKey}&units=${units}`
    axios.get(apiUrl).then(handleResponse);

    return("Loading...");
  }
  }
