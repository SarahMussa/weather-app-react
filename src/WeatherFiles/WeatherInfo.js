import React from "react";
import { Container, Row, Col } from 'react-grid-system';

import CurrentDate from "../Date/CurrentDate";
import DaySunrise from "../Date/DaySunrise";
import DaySunset from "../Date/DaySunset";
import CurrentHour from "../Date/CurrentHour";

export default function WeatherInfo (props){

    return(
        <div className="WeatherInfo">
            <Row className="city">
            <Col>
              <h1 className="searchedCity">{props.data.city}</h1>
              <p className="currentDate"><CurrentDate date={props.data.date} /></p>
              <p><DaySunrise sunrise={props.data.sunrise} /></p>
              <p><DaySunset sunset={props.data.sunset} /></p>
            </Col>
            <Col>
              <p>
                <img src={props.data.icon} alt="sunny" className="dailyIcon" />
              </p>
              <h3 className="temperature today">
                <strong> {Math.round(props.data.tempMax)}° </strong>/ {Math.round(props.data.tempMin)}°
                <span className="temperatureUnit">C</span>
              </h3>
            </Col>
          </Row>

          <Row className="currently">
            <Col>
              <p className="currentHour"><CurrentHour hour={props.data.hour} /></p>
              <br />
              <p className="text-capitalize">{props.data.description}</p>
              <img src={props.data.icon} alt={props.data.description} className="iconNow" />
            </Col>
            <Col>
              <h3>
                <strong className="temperature today">
                  {Math.round(props.data.temp)}
                  <span className="temperatureUnit">° C</span>
                </strong>
              </h3>
              <p>
                Feels like <strong>{(Math.round(props.data.feelslike))}</strong>°
              </p>
              <br />
              <p>Wind {Math.round(props.data.wind)} km/h</p>
              <p>Humidity {props.data.humidity} %</p>
              <p>UV Index {props.data.uvi}</p>
            </Col>
          </Row>

        </div>
    );
}