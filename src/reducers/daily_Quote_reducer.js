import { FETCH_DAILY_QUOTE } from "../actions/daily_quote_action";
import quotesList from "../data";

const initialState = {
  quote: quotesList(),
};

const dailyQuoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DAILY_QUOTE:
      return {
        ...state,
        quote: action.payload,
      };
    default:
      return state;
  }
};

export default dailyQuoteReducer;
