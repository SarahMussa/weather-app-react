import React from "react";

export default function Buttons (){
return (
    <div className="buttons">
    <button className="currentLocation">
        <span aria-label="emoji" role="img">
          📍{" "}
        </span>{" "}
            Current Location
    </button>
        <div className="cf">
        <button className="units">
            <span className="Clink">°C</span>
              {" "}
              |
            <span className="Flink">
                °F
            </span>
        </button>
        </div>
    <button className="ampm">Am/Pm</button>
    </div>
);
}