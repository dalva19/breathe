import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadDailyQuote, loadRatingQuote } from "../actions/daily_quote_action";
import { loadRandomDog } from "../actions/dog_action";
import { Link } from "react-router-dom";
//style
import styled from "styled-components";

const Home = () => {
  //redux
  const dispatch = useDispatch();
  const { quotes, randomQuote, ratingQuotes } = useSelector(
    (state) => state.dailyQuote
  );

  //local state
  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(loadDailyQuote(quotes));
  }, [dispatch]);

  //event handlers
  const handleBreatheButton = () => {
    dispatch(loadRandomDog());
    dispatch(loadRatingQuote(ratingQuotes, parseInt(input)));
    setInput("");
  };

  return (
    <div>
      <StyledHeader>
        <h1>Breathe</h1>
      </StyledHeader>
      <div className="daily-quote">
        <p>{randomQuote.q}</p>
        <p>-{randomQuote.a}</p>
      </div>
      <input
        type="text"
        placeholder="Rate your day from 0-10"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <Link to="/breathe">
        <button onClick={handleBreatheButton}>Just Breathe</button>
      </Link>
    </div>
  );
};

const StyledHeader = styled.div`
  min-height: 15vh;
  background-color: black;
  color: white;
  font-family: "Lobster", cursive;
  width: 100%;
  text-align: center;
  padding-top: 1.5rem;
`;

export default Home;
