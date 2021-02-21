import React from "react";

export default function DaySunset(props){

    let hours = props.sunset.getHours();
    let minutes = props.sunset.getMinutes();
    let hourFormat = "24h";
    
    if (hourFormat === "24h") {
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }

    return (<div>{hours}:{minutes}h</div>);
  } else {
    return props.sunset.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    });
  }
}