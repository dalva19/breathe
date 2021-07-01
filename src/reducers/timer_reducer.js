import {
  SET_30SEC_TIMER,
  SET_1MIN_TIMER,
  SET_2MIN_TIMER,
  RESET_TIMER,
  TIMER_COMPLETE,
} from "../actions/timer_action";

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  isLoaded: false,
  complete: false,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_30SEC_TIMER:
      return {
        ...state,
        seconds: 5,
        isLoaded: true,
      };
    case SET_1MIN_TIMER:
      return {
        ...state,
        minutes: 1,
        isLoaded: true,
      };
    case SET_2MIN_TIMER:
      return {
        ...state,
        minutes: 2,
        isLoaded: true,
      };
    case TIMER_COMPLETE:
      return {
        ...state,
        complete: true,
      };
    case RESET_TIMER:
      return initialState;
    default:
      return state;
  }
};

export default timerReducer;
