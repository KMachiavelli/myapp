import React, { useContext } from "react";
import { BreakPointContext } from "../App";
import FactsBlock from "../containers/FactsBlock/FactsBlock";
import Navbar from "../components/Navbar/Navbar";
import { useBreakpoint } from "../customHooks/useBreakpoint";
import { StyledHome } from "./HomeStyles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carouselli from "../components/Carousel/Carouselli";
import imgShrek1 from "../assets/imgs/img-shrek1.jpg";
import imgShrek2 from "../assets/imgs/img-shrek2.jpg";
import imgShrek3 from "../assets/imgs/img-shrek3.jpg";

export interface StyledHomeI {
  breakpoint: boolean;
}

const Home = () => {
  const breakPointContext = useContext(BreakPointContext);
  return (
    <StyledHome breakpoint={breakPointContext}>
      {/* <Carousel
        renderArrowNext={(prop) => ArrowCarousel(prop)}
        renderArrowPrev={(prop) => ArrowCarousel(prop)}
      >
        <span>Lorem ipsum</span>
        <span>Lorxem ipsum dolor sit</span>
      </Carousel> */}
      <Carouselli
        components={[
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            et aperiam sed nobis asperiores nostrum. Harum quia consequuntur
            illo ratione odio, placeat eum dolorum ullam autem itaque deleniti,
            sed aspernatur!
          </h1>,
          <img
            src={imgShrek1}
            width={800}
            height={400}
            style={{ float: "left", margin: 0 }}
          />,
          <img
            src={imgShrek2}
            width={800}
            height={400}
            style={{ float: "left", margin: 0 }}
          />,
          <img
            src={imgShrek3}
            width={800}
            height={400}
            style={{ float: "left", margin: 0 }}
          />,
        ]}
        width={800}
        autoSwitchTime={3000}
      />
    </StyledHome>
  );
};

export default Home;
