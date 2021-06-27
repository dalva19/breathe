import { FETCH_DAILY_QUOTE } from "../actions/daily_quote_action";

const initialState = {
  quote: [],
  loaded: false,
};

const dailyQuoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DAILY_QUOTE:
      return {
        ...state,
        quote: action.payload,
        loaded: true,
      };
    default:
      return state;
  }
};

export default dailyQuoteReducer;
