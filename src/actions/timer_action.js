//variables
export const SET_30SEC_TIMER = "SET_30SEC_TIMER";
export const SET_1MIN_TIMER = "SET_1MIN_TIMER";
export const SET_2MIN_TIMER = "SET_2MIN_TIMER";

//action creator
export const load30Sec = () => {
  return {
    type: SET_30SEC_TIMER,
  };
};

export const load1Min = () => {
  return {
    type: SET_1MIN_TIMER,
  };
};

export const load2Min = () => {
  return {
    type: SET_2MIN_TIMER,
  };
};
