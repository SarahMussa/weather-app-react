import React from "react";
import { Col, Row } from "react-grid-system";
import "./Weather.css";

export default function Forecast() {
  let Data = {
    temp: "17",
    tempMax: 20,
    tempMin: 15,
    icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
  };
  return (
    <div className="Forecast">
      <Row>
        <Col md={5}>Monday</Col>
        <Col md={4}>
          <strong className="forecast-max">{Data.tempMax}°</strong>/
          <span className="forecast-min">{Data.tempMin}</span>°
        </Col>
        <Col md={3}>
          <img
            src={Data.icon}
            alt="Temperature icon"
            className="forecastIcons"
          />
        </Col>
      </Row>
      <Row>
        <Col md={5}>Tuesday</Col>
        <Col md={4}>
          <strong className="forecast-max">{Data.tempMax}°</strong>/
          <span className="forecast-min">{Data.tempMin}</span>°
        </Col>
        <Col md={3}>
          <img
            src={Data.icon}
            alt="Temperature icon"
            className="forecastIcons"
          />
        </Col>
      </Row>
      <Row>
        <Col md={5}>Wednesday</Col>
        <Col md={4}>
          <strong className="forecast-max">{Data.tempMax}°</strong>/
          <span className="forecast-min">{Data.tempMin}</span>°
        </Col>
        <Col md={3}>
          <img
            src={Data.icon}
            alt="Temperature icon"
            className="forecastIcons"
          />
        </Col>
      </Row>
      <Row>
        <Col md={5}>Thursday</Col>
        <Col md={4}>
          <strong className="forecast-max">{Data.tempMax}°</strong>/
          <span className="forecast-min">{Data.tempMin}</span>°
        </Col>
        <Col md={3}>
          <img
            src={Data.icon}
            alt="Temperature icon"
            className="forecastIcons"
          />
        </Col>
      </Row>
      <Row>
        <Col md={5}>Friday</Col>
        <Col md={4}>
          <strong className="forecast-max">{Data.tempMax}°</strong>/
          <span className="forecast-min">{Data.tempMin}</span>°
        </Col>
        <Col md={3}>
          <img
            src={Data.icon}
            alt="Temperature icon"
            className="forecastIcons"
          />
        </Col>
      </Row>
      <Row>
        <Col md={5}>Saturday</Col>
        <Col md={4}>
          <strong className="forecast-max">{Data.tempMax}°</strong>/
          <span className="forecast-min">{Data.tempMin}</span>°
        </Col>
        <Col md={3}>
          <img
            src={Data.icon}
            alt="Temperature icon"
            className="forecastIcons"
          />
        </Col>
      </Row>
      <Row>
        <Col md={5}>Sunday</Col>
        <Col md={4}>
          <strong className="forecast-max">{Data.tempMax}°</strong>/
          <span className="forecast-min">{Data.tempMin}</span>°
        </Col>
        <Col md={3}>
          <img
            src={Data.icon}
            alt="Temperature icon"
            className="forecastIcons"
          />
        </Col>
      </Row>
    </div>
  );
}
