import React from "react";
import gifs from "../../assets/gifs/gifs";
import "./WeatherItem.css";

function WeatherItem(props) {
  const { datetime, index, temp, windspeed, conditions, gif } = props;

  return (
    <div
      key={index}
      className="weather-forecast-box w-100 d-flex align-items-center border rounded p-3 mb-3"
    >
      <div>{datetime}</div>
      <div>
        <img src={gifs[`${gif}`]} alt="" />
      </div>
      <div className="fs-3">{temp}°C</div>
      <div>{conditions}</div>
      <div className="real-feel">Wind Speed: {windspeed}km/h</div>
    </div>
  );
}

export default WeatherItem;
