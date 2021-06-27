import React from "react";
import { useSelector } from "react-redux";

const RatingQuote = () => {
  const { ratingQuote, ratingLoaded } = useSelector(
    (state) => state.dailyQuote
  );

  return (
    <div>
      {ratingLoaded && (
        <div>
          <p>{ratingQuote.q}</p>
          <p>{ratingQuote.a}</p>
        </div>
      )}
    </div>
  );
};

export default RatingQuote;
