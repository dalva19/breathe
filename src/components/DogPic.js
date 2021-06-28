import React from "react";
import { useSelector } from "react-redux";
//style
import styled from "styled-components";

const DogPic = () => {
  const { loaded, dog } = useSelector((state) => state.dog);

  return (
    <div>
      <StyledDogPic>{loaded && <img src={dog} alt="dog"></img>}</StyledDogPic>
    </div>
  );
};

const StyledDogPic = styled.div`
  text-align: center;
  img {
    width: 40%;
    height: 20%
    object-fit: cover;
    border-radius: 50%;
    margin-top: 2rem;
  }
`;

export default DogPic;
