const initalState = {
  data: null,
  loading: false,
  error: null,
};

export function newsReducer(state = initalState, action) {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "UPDATE_NEWS_DATA":
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
