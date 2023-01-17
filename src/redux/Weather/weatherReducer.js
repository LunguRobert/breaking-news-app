const initalState = {
  data: null,
  loading: false,
  error: null,
};

export function weatherReducer(state = initalState, action) {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "UPDATE_WEATHER_DATA":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case "UPDATE_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
