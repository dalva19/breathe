import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadDailyQuote } from "../actions/daily_quote_action";
import { loadRandomDog } from "../actions/dog_action";
import { load30Sec, load1Min, load2Min } from "../actions/timer_action";
import { Link } from "react-router-dom";
//components
import Header from "./Header";
//style
import styled from "styled-components";

const Home = () => {
  //redux
  const dispatch = useDispatch();
  const { quotes, randomQuote } = useSelector((state) => state.dailyQuote);

  const { hours, minutes, seconds, isLoaded } = useSelector(
    (state) => state.timer
  );

  let hrsMinsSecs = { hours: hours, minutes: minutes, seconds: seconds };

  useEffect(() => {
    dispatch(loadDailyQuote(quotes));
  }, [dispatch]);

  //event handlers
  const handleBreatheButton = () => {
    dispatch(loadRandomDog());
  };

  const handle30SecTimeButtonClick = () => {
    dispatch(load30Sec());
    hrsMinsSecs = { hours: hours, minutes: minutes, seconds: seconds };
  };

  const handle1MinTimeButtonClick = () => {
    dispatch(load1Min());
    hrsMinsSecs = { hours: hours, minutes: minutes, seconds: seconds };
  };

  const handle2MinTimeButtonClick = () => {
    dispatch(load2Min());
    hrsMinsSecs = { hours: hours, minutes: minutes, seconds: seconds };
  };

  return (
    <div>
      <Header />
      <StyledDailyQuote>
        <p>{randomQuote.q}</p>
        <p>-{randomQuote.a}</p>

        <br></br>
        <br></br>

        <button
          onClick={handle30SecTimeButtonClick}
          style={
            seconds ? { background: "#5DC733" } : { background: "#1b1b1b" }
          }
        >
          00:30
        </button>
        <button
          onClick={handle1MinTimeButtonClick}
          style={
            minutes === 1
              ? { background: "#5DC733" }
              : { background: "#1b1b1b" }
          }
        >
          01:00
        </button>
        <button
          onClick={handle2MinTimeButtonClick}
          style={
            minutes === 2
              ? { background: "#5DC733" }
              : { background: "#1b1b1b" }
          }
        >
          02:00
        </button>

        <Link to="/breathe">
          <button onClick={handleBreatheButton} className="breathe-button">
            Just Breathe
          </button>
        </Link>
      </StyledDailyQuote>
    </div>
  );
};

const StyledDailyQuote = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;
  font-family: "lato", sans-serif;

  button {
    font-size: 1rem;
    border: none;
    margin-top: 1rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    color: white;
  }

  .breathe-button {
    margin-top: 3rem;
  }

  .selected {
    background-color: green;
  }
`;

export default Home;
