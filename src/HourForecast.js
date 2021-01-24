import React from "react";
import { Col, Row } from "react-grid-system";
import "./Weather.css";

export default function HourForecast() {
  let Data = {
    morning: "10",
    afternoon: "17",
    evening: "15",
    night: "12"
  };
  return (
    <div className="HourForecast">
      <Row className="hourTemp information">
        <Col>
          <p>Morning</p>
          <p className="temperature">{Data.morning}°</p>
        </Col>
        <Col>
          <p>Afternoon</p>
          <p className="temperature">{Data.afternoon}°</p>
        </Col>
        <Col>
          <p>Evening</p>
          <p className="temperature">{Data.evening}°</p>
        </Col>
        <Col>
          <p>Night</p>
          <p className="temperature">{Data.night}°</p>
        </Col>
      </Row>
    </div>
  );
}
