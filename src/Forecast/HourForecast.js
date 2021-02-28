import React, { useState } from "react";
import { Col, Row } from "react-grid-system";
import "./Forecast.css";
import axios from "axios";


export default function HourForecast() {
  const [Ready, setReady]=useState(false);
  let [Data, setData]=useState({})

  function handleResponse(response){
    console.log(response.data);
     setData ({
        morning: "1",
        afternoon: "17",
        evening: "15",
        night: "12"
      });
      setReady(true);
  }
  if(Ready){
    return (
        <div className="HourForecast">
          <Row>
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
  }else{
    const apiKey ="8430d97c754240b31c1a7afacb15800d";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${apiKey}&units=${units}`
    axios.get(apiUrl).then(handleResponse);

    return("Loading...");
  }
  
}
