import React from "react";
import "./Weather.css";
import { Container, Row, Col } from 'react-grid-system';


export default function Weather() {
  let Data = {
    city: "Lisbon",
    temp: "17",
    tempMax: 20,
    tempMin: 15,
    date: "Sunday, January 3",
    currentHour: "12:00",
    description: "Sunny",
    icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
    uvi: "2 of 10",
    sunrise: "08:00",
    sunset: "20:00"
  };

  return (
    <Container>
      <br />
      <Row>
        <Col>
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
              <a href="/" className="Clink">
                °C
              </a>{" "}
              |
              <a href="/" className="Flink">
                °F
              </a>
            </button>
            <button className="ampm">Am/Pm</button>
          </div>
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
                <strong> {Data.tempMax}° </strong>/{Data.tempMin}°
                <span className="temperatureUnit">C</span>
              </h3>
            </Col>
          </Row>

          <Row className="currently">
            <Col>
              <p className="currentHour">{Data.currentHour}</p>
              <br />
              <p>{Data.description}</p>
              <img src={Data.icon} alt="sunny" className="iconNow" />
            </Col>
            <Col>
              <h3>
                <strong className="temperature today">
                  {Data.temp}
                  <span className="temperatureUnit">° C</span>
                </strong>
              </h3>
              <p>
                Feels like <strong>{Data.temp}</strong>°
              </p>
              <br />
              <p>Wind {Data.wind} km/h</p>
              <p>Humidity {Data.humidity} %</p>
              <p>UV Index {Data.uvi}</p>
            </Col>
            <div className="HourForecast">
            </div>
          </Row>
        </Col>

        <Col className="right">
          <div className="forecast">
          </div>
        </Col>
      </Row>
    </Container>
  );
}
