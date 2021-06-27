//variables
export const FETCH_DAILY_QUOTE = "FETCH_DAILY_QUOTE";
export const FETCH_RATING_QUOTE = "FETCH_RATING_QUOTE";

//action creator
export const loadDailyQuote = (quotes) => {
  const randomQuoteId = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes.find((q) => q.id === randomQuoteId);

  return {
    type: FETCH_DAILY_QUOTE,
    payload: randomQuote,
  };
};

export const loadRatingQuote = (quotes, rating) => {
  const ratingQuote = quotes.find((q) => q.rating_id === rating);

  return {
    type: FETCH_RATING_QUOTE,
    payload: ratingQuote,
  };
};
