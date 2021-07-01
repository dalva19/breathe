import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./Header";
import Timer from "./Timer";
//style
import styled from "styled-components";

const Breathe = () => {
  const { loaded, dog } = useSelector((state) => state.dog);

  const { hours, minutes, seconds, isloaded } = useSelector(
    (state) => state.timer
  );

  let hrsMinsSecs = { hours: hours, minutes: minutes, seconds: seconds };

  return (
    <div>
      <Header />
      <StyledBreathe>
        {isloaded && <Timer hrsMinsSecs={hrsMinsSecs} />}
        <StyledDogPic>{loaded && <img src={dog} alt="dog"></img>}</StyledDogPic>
        <Link to="/">
          <button>Back</button>
        </Link>
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
