import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//components
import Header from "./Header";
import DogPic from "./Breathe";
//style
import styled from "styled-components";

const RatingQuote = () => {
  const { ratingQuote, ratingLoaded } = useSelector(
    (state) => state.dailyQuote
  );

  return (
    <div>
      <Header />

      {ratingLoaded && (
        <StyledRatingQuote>
          <p>{ratingQuote.q}</p>
          <p>-{ratingQuote.a}</p>
          <DogPic />
          <Link to="/">
            <button>Back</button>
          </Link>
        </StyledRatingQuote>
      )}
    </div>
  );
};

const StyledRatingQuote = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

export default RatingQuote;
