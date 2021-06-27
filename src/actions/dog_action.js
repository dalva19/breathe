import axios from "axios";
//variables
export const FETCH_DOG = "FETCH_DOG";

//action creator
export const loadRandomDog = () => {
  const ROOT_URL = "https://dog.ceo/api/breeds/image/random";

  const request = axios.get(`${ROOT_URL}`);
  return {
    type: FETCH_DOG,
    payload: request,
  };
};
