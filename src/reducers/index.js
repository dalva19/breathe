import { combineReducers } from "redux";
import dailyQuoteReducer from "./daily_Quote_reducer";

const rootReducer = combineReducers({
  dailyQuote: dailyQuoteReducer,
});

export default rootReducer;
