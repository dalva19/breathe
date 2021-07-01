import React, { useState, useEffect } from "react";
import { loadReset } from "../actions/timer_action";
import { useDispatch } from "react-redux";
//style
import styled from "styled-components";

const Timer = ({ hrsMinsSecs }) => {
  const { hours = 0, minutes = 0, seconds = 0 } = hrsMinsSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

  const dispatch = useDispatch();

  const tick = () => {
    if (hrs === 0 && (mins === 0) & (secs === 0)) {
      dispatch(loadReset());
    } else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <StyledTimer>
      <h1>{`${hrs.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}</h1>
    </StyledTimer>
  );
};

const StyledTimer = styled.div`
  font-size: 2rem;
  padding-top: 1rem;
`;

export default Timer;
