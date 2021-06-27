import axios from "axios";

//variables
export const FETCH_DAILY_QUOTE = "FETCH_DAILY_QUOTE";

//action creator
export const loadDailyQuote = async () => {
  return {
    type: FETCH_DAILY_QUOTE,
  };
};
