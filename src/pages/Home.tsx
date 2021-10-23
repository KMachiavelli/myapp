import React, { useContext } from "react";
import { BreakPointContext } from "../App";
import FactsBlock from "../containers/FactsBlock/FactsBlock";
import Navbar from "../components/Navbar/Navbar";
import { useBreakpoint } from "../customHooks/useBreakpoint";
import { StyledHome } from "./HomeStyles";

export interface StyledHomeI {
  breakpoint: boolean;
}

const Home = () => {
  const breakPointContext = useContext(BreakPointContext);
  return (
    <StyledHome breakpoint={breakPointContext}>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        ipsum, dolores repellat a eaque quae fugiat magnam saepe rerum corrupti
        sint hic magni exercitationem cupiditate ut id optio animi possimus?
      </h1>
    </StyledHome>
  );
};

export default Home;
