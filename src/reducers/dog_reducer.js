import { FETCH_DOG } from "../actions/dog_action";

const initialState = {
  dog: [],
  loaded: false,
};

const randomDogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOG:
      return {
        ...state,
        dog: action.payload.data.message,
        loaded: true,
      };
    default:
      return state;
  }
};

export default randomDogReducer;
