import React from "react";
import Layout from "../../components/Layout";
import "./Weather.css";
import constants from "../../utils/constants.json";
import gifs from "../../assets/gifs/gifs";
import WeatherList from "../../components/WeatherList";
import { connect } from "react-redux";

function Weather(props) {
  const { weather } = props;

  const keys = Object.keys(gifs);
  const doesExist = (icon) => keys.find((key) => key == icon);

  function addGradient() {
    let root = document.documentElement;
    const colors = constants[`${weather.currentConditions.icon}`];

    if (colors) {
      root.style.setProperty("--left-color", colors[0]);
      root.style.setProperty("--middle-color", colors[1]);
      root.style.setProperty("--right-color", colors[2]);
    }
  }

  if (weather) {
    addGradient();
  }

  return (
    <Layout>
      <div className="banner-weather">
        <h1 className="container ">WEATHER</h1>
      </div>
      {weather ? (
        <div>
          <section className="current-weather py-5">
            <div className="container">
              <h2 className="text-primary text-center mb-5 font-weight-bold">
                Current Weather
              </h2>
              <div className="d-flex flex-wrap justify-content-around align-items-center">
                <div className="px-3">
                  <div className="fs-2 mb-2 font-weight-bold font-weight-bold">
                    <strong className="font-weight-bold">
                      {weather.address}
                    </strong>
                  </div>
                  <div className="fs-4 font-weight-bold">
                    <strong className="font-weight-bold">Today</strong>,{" "}
                    {weather.currentConditions.datetime}
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <strong className="fs-1 font-weight-bold">
                      {weather.currentConditions.temp}°C
                    </strong>
                    <img
                      src={
                        doesExist(weather.currentConditions.icon)
                          ? gifs[`${doesExist(weather.currentConditions.icon)}`]
                          : gifs.celsius
                      }
                    />
                  </div>
                </div>
                <div className="px-3 ">
                  <p className="fs-5 font-weight-bold">
                    UV Index:{" "}
                    <strong className="font-weight-bold">
                      {weather.currentConditions.uvindex}
                    </strong>
                  </p>
                  <p className="fs-5 text-capitalize font-weight-bold">
                    {weather.currentConditions.conditions}
                  </p>
                  <p className="fs-5 font-weight-bold">
                    Vânt:{" "}
                    <strong className="font-weight-bold">
                      {weather.currentConditions.windspeed} km/h
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-5">
            <div className="container">
              <h2 className="text-primary text-center mb-5">
                Prognoză pe 5 zile
              </h2>
              <WeatherList weather={weather} />
            </div>
          </section>
        </div>
      ) : null}
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    weather: state.weather.data,
  };
}

export default connect(mapStateToProps)(Weather);
