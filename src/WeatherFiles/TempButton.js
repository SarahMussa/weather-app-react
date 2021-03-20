import React, { useState } from "react";

export default function TempButton (props){

const [unit, setUnit] = useState("celsius")

function convertFahrenheit (event){
    event.preventDefault();
    setUnit("fahrenheit");
}

function convertCelsius(event){
    event.preventDefault();
    setUnit("celsius");
}

if(unit === "celsius"){
    return (
        <div className="buttons">
            <h3>
                <strong className="temperature today">
                    {Math.round(props.celsius)}
                    <span className="temperatureUnit">° C</span> / 
                    <span className="Flink">
                    <a href="/" onClick={convertFahrenheit}> °F</a>
                    </span>
                </strong>
            </h3>
        </div>
    );
    }else{
        return (
        <div className="buttons">
            <h3>
                <strong className="temperature today">
                    {Math.round((props.celsius * 9) / 5 + 32)}
                    <span className="temperatureUnit"> °F</span> /
                    <span className="Clink">
                     <a href="/" onClick={convertCelsius}> °C</a>
                    </span>
                </strong>
            </h3>
        </div>
    );
    }

}