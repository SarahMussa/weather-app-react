import React, { useState } from "react";
import { Container, Row, Col } from 'react-grid-system';

import "./Weather.css";

import Forecast from "../Forecast/Forecast";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";



export default function Weather(props) {
  const [Ready, setReady]=useState(false);
  const [Data, setData]=useState(null);
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
    //console.log(response.data);
    setData({
    city: response.data.name,
    temp: response.data.main.temp,
    tempMax: response.data.main.temp_max,
    tempMin: response.data.main.temp_min,
    feelslike: response.data.main.feels_like,
    date: new Date(response.data.dt * 1000),
    sunrise: new Date(response.data.sys.sunrise * 1000),
    sunset: new Date(response.data.sys.sunset * 1000),
    hour: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    lat: response.data.coord.lat,
    lon: response.data.coord.lon

    })
    setReady (true);
  }

  //Search city
  function searchCity(){
    const apiKey ="8430d97c754240b31c1a7afacb15800d";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
    axios.get(apiUrl).then(handleResponse);
  }

  //Search for a city - API call
  function Submit(event) {
    event.preventDefault();
    searchCity();
  }

  //Change city
  function ChangeCity(event) {
      setCity(event.target.value);
      //Update the city
  }
  

  if (Ready){
return (
    <Container>
      <br />
      <Row>
        <Col>
          <form onSubmit={Submit} className="searchCity">
            <input type="search" placeholder="Search city" onChange={ChangeCity} />
            <input type="submit" value="🔎" />
          </form>
        </Col>
      </Row>

      <Row className="app">
        <Col className="left">
          <WeatherInfo data={Data} />
        </Col>

        <Col className="right">
            <Forecast lat={Data.lat} lon={Data.lon} />
        </Col>
      </Row>
    </Container>
  );
  }else{
    searchCity();
    return("Loading...");
  }
  }
