import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadReset } from "../actions/timer_action";
import { Link } from "react-router-dom";
import Header from "./Header";
import Timer from "./Timer";
//style
import styled from "styled-components";

const Breathe = () => {
  const dispatch = useDispatch();

  const { loaded, dog } = useSelector((state) => state.dog);

  const { hours, minutes, seconds, isLoaded, complete } = useSelector(
    (state) => state.timer
  );

  let hrsMinsSecs = { hours: hours, minutes: minutes, seconds: seconds };

  //event handlers
  const handleBackButtonClick = () => {
    dispatch(loadReset());
  };

  const audio = new Audio(
    "https://freesound.org/data/previews/91/91926_7037-lq.mp3"
  );

  const play = () => {
    audio.play();
  };

  return (
    <div>
      <Header />
      <StyledBreathe>
        <Link to="/">
          <button onClick={handleBackButtonClick}>Back</button>
        </Link>
        {isLoaded && <Timer hrsMinsSecs={hrsMinsSecs} />}
        {complete && (
          <div>
            <StyledDogPic>
              <img src={dog} alt="dog"></img>
            </StyledDogPic>
          </div>
        )}
      </StyledBreathe>
    </div>
  );
};

const StyledBreathe = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;
  font-family: "lato", sans-serif;
`;
const StyledDogPic = styled.div`
  text-align: center;
  img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 50%;
    margin-top: 2rem;
  }
`;

export default Breathe;
