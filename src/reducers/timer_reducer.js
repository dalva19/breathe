import {
  SET_30SEC_TIMER,
  SET_1MIN_TIMER,
  SET_2MIN_TIMER,
  RESET_TIMER,
} from "../actions/timer_action";

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  isloaded: false,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_30SEC_TIMER:
      return {
        ...state,
        hours: 0,
        minutes: 0,
        seconds: 30,
        isloaded: true,
      };
    case SET_1MIN_TIMER:
      return {
        ...state,
        minutes: 1,
        isloaded: true,
      };
    case SET_2MIN_TIMER:
      return {
        ...state,
        minutes: 2,
        isloaded: true,
      };
    case RESET_TIMER:
      return initialState;
    default:
      return state;
  }
};

export default timerReducer;
