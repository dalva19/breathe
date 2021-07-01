import { combineReducers } from "redux";
import dailyQuoteReducer from "./daily_quote_reducer";
import randomDogReducer from "./dog_reducer";
import timerReducer from "./timer_reducer";

const rootReducer = combineReducers({
  dailyQuote: dailyQuoteReducer,
  dog: randomDogReducer,
  timer: timerReducer,
});

export default rootReducer;
