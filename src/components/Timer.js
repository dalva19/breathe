import React, { useState, useEffect } from "react";

const Timer = ({ hrsMinsSecs }) => {
  const { hours = 0, minutes = 0, seconds = 0 } = hrsMinsSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    if (hrs === 0 && (mins === 0) & (secs === 0)) {
      reset();
    } else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () => {
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
  };

  return (
    <div>
      <h1>{`${hrs.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}</h1>
    </div>
  );
};

export default Timer;
