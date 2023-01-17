import apiKey from "../../utils/api-key.json";

export function startLoading() {
  return {
    type: "START_LOADING",
  };
}

export function updateNewsData(payload) {
  return {
    type: "UPDATE_NEWS_DATA",
    payload,
  };
}

export function updateError(payload) {
  return {
    type: "UPDATE_ERROR",
    payload,
  };
}

export function fetchNews() {
  return (dispatch) => {
    dispatch(startLoading());

    Promise.all([
      fetch(
        `https://gnews.io/api/v4/top-headlines?token=${apiKey.newsKey}&country=ro`
      ),
    ])
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => {
        dispatch(updateNewsData(data));
      })
      .catch((err) => dispatch(updateError(err)));
  };
}
