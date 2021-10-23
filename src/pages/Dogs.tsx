import React from "react";
import DogBox from "../containers/DogBox/DogBox";
import { StyledDogs } from "./DogsStyles";

const Dogs = () => {
  return (
    <StyledDogs>
      <DogBox />
    </StyledDogs>
  );
};

export default Dogs;
