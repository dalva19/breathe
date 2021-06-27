import React from "react";
import { useSelector } from "react-redux";

const DogPic = () => {
  const { loaded, dog } = useSelector((state) => state.dog);

  return <div>{loaded && <img src={dog} alt="dog"></img>}</div>;
};

export default DogPic;
