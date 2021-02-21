import React from "react";

export default function DaySunset(props){

    let hours = props.sunset.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }

    let minutes = props.sunset.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return (<div>{hours}:{minutes}h</div>);
}