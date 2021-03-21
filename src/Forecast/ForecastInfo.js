import React from "react";
import { Col, Row } from "react-grid-system";
import WeatherIcon from "../WeatherFiles/WeatherIcon";

export default function ForecastInfo(props){

    function weekday() {
        let date = new Date(props.data.dt * 1000);
        let weekDays = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        let weekDay = weekDays[date.getDay()];
        return `${weekDay}`;
    }

    function tempMax() {
        let tempMax= Math.round(props.data.temp.max);
        return `${tempMax}`;
    }

    function tempMin() {
        let tempMin= Math.round(props.data.temp.min);
        return `${tempMin} ºC`;
    }

    return(
        <div>
        <Row>
            <Col md={5}>{weekday()}</Col>
            <Col md={4}>
            <strong className="forecast-max">{tempMax()}</strong>  /
            <span className="forecast-min"> {tempMin()}</span>
            </Col>
            <Col md={3} className="icon">
            <WeatherIcon code={props.data.weather[0].icon} />
            </Col>
        </Row>
    </div>
    )
}