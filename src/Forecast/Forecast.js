import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastInfo from "./ForecastInfo";
import HourForecast from "./HourForecast"

export default function Forecast(props) {
  const [loaded, setLoaded]=useState(false);
  const [forecast, setForecast]=useState(null);

  function handleForecastResponse (response){
    //console.log(response.data);
    setForecast(response.data);
    
    setLoaded(true);
  }
 

  if(loaded){
    console.log(forecast)
  return (
    <div>
    <div className="Forecast">
      <HourForecast data={forecast.daily[0].temp} />
    </div>
    <div className="Forecast">
      <ForecastInfo data={forecast.daily[1]} />
      <ForecastInfo data={forecast.daily[2]} />
      <ForecastInfo data={forecast.daily[3]} />
      <ForecastInfo data={forecast.daily[4]} />
      <ForecastInfo data={forecast.daily[5]} />
      <ForecastInfo data={forecast.daily[6]} />
      <ForecastInfo data={forecast.daily[7]} />
    </div>
    </div>
  );  
  } else {
    const apiKey ="8430d97c754240b31c1a7afacb15800d";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=${units}`
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
  }
