import axios from "axios";

//variables
export const FETCH_DAILY_QUOTE = "FETCH_DAILY_QUOTE";

//action creator
export const loadDailyQuote = async () => {
  const ROOT_URL = "https://zenquotes.io/api/quotes";

  const request = await axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_DAILY_QUOTE,
    payload: request,
  };
};
