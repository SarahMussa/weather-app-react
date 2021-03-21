import React from "react";
import { Container, Row, Col } from 'react-grid-system';

import CurrentDate from "../Date/CurrentDate";
import DaySunrise from "../Date/DaySunrise";
import DaySunset from "../Date/DaySunset";
import CurrentHour from "../Date/CurrentHour";
import WeatherIcon from "./WeatherIcon"
import TempButton from "./TempButton"

export default function WeatherInfo (props){

    return(
        <div className="WeatherInfo">
            <Row className="city">
              <Col>
                <h1 className="searchedCity">{props.data.city}</h1>
                <p className="currentDate"><CurrentDate date={props.data.date} /></p>
                <p className="currentHour"><CurrentHour hour={props.data.hour} /></p>

{/*
                <h3 className="temperature today">
                  <strong> {Math.round(props.data.tempMax)}° </strong>/ {Math.round(props.data.tempMin)}°
                  <span className="temperatureUnit">C</span>
                </h3>
*/}
              </Col>

              <Col>
                  <p className="description">{props.data.description}</p>
                  <WeatherIcon code={props.data.icon} alt={props.data.description} />
                  <TempButton celsius={props.data.temp}/>
{/*
                <p>
                  Feels like <strong>{(Math.round(props.data.feelslike))}</strong>°
                </p>
*/}
              </Col>
            </Row>
              
            <Row className="currently">
              <Col>
                <p><DaySunrise sunrise={props.data.sunrise} /></p>
                <p><DaySunset sunset={props.data.sunset} /></p>
              </Col>
              <Col>
                <p>Wind {Math.round(props.data.wind)} km/h</p>
                <p>Humidity {props.data.humidity} %</p>
              </Col>
            </Row>
        </div>
    );
}