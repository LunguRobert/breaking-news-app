import apiKey from "../../utils/api-key.json";

export function startLoading() {
  return {
    type: "START_LOADING",
  };
}

export function updateWeatherData(payload) {
  return {
    type: "UPDATE_WEATHER_DATA",
    payload,
  };
}

export function updateError(payload) {
  return {
    type: "UPDATE_ERROR",
    payload,
  };
}

export function fetchWeather() {
  return (dispatch) => {
    dispatch(startLoading());

    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Bucharest?unitGroup=us&key=${apiKey.weatherKey}&contentType=json`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateWeatherData(data));
      })
      .catch((err) => dispatch(updateError(err)));
  };
}
