import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadDailyQuote, loadRatingQuote } from "../actions/daily_quote_action";
import { loadRandomDog } from "../actions/dog_action";
import { Link } from "react-router-dom";
//components
import Header from "./Header";
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
      <Header />
      <StyledDailyQuote>
        <p>{randomQuote.q}</p>
        <p>-{randomQuote.a}</p>
        <input
          type="text"
          placeholder="Rate your day from 0-10"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <br></br>
        <Link to="/breathe">
          <button onClick={handleBreatheButton}>Just Breathe</button>
        </Link>
      </StyledDailyQuote>
    </div>
  );
};

const StyledDailyQuote = styled.div`
  text-align: center;
  margin-top: 4rem;
  font-family: "lato", sans-serif;
  input {
    width: 30%;
    font-size: 1rem;
    font-weight: bold;
    font-family: "lato", sans-serif;
    padding: 0.5rem;
    border: none;
    margin-top: 3rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1rem;
    border: none;
    margin-top: 1rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #1b1b1b;
    color: white;
  }
`;

export default Home;
