import {
  FETCH_DAILY_QUOTE,
  FETCH_RATING_QUOTE,
} from "../actions/daily_quote_action";
import quotesList from "../data";
import ratingQuotes from "../rating_data";

const initialState = {
  quotes: quotesList(),
  ratingQuotes: ratingQuotes(),
  randomQuote: [],
  ratingQuote: [],
  ratingLoaded: false,
};

const dailyQuoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DAILY_QUOTE:
      return {
        ...state,
        randomQuote: action.payload,
      };
    case FETCH_RATING_QUOTE:
      return {
        ...state,
        ratingQuote: action.payload,
        ratingLoaded: true,
      };
    default:
      return state;
  }
};

export default dailyQuoteReducer;
