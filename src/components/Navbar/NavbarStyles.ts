import styled from "styled-components";
import { BreakPointI, SectionTitleI, StyledNavbarI } from "./Navbar";
import { isMobile } from "../../customHooks/useBreakpoint";

export const StyledNavbar = styled.div<StyledNavbarI>`
  margin-right: 10px;
  height: 100%;
  width: 100%;
  background: var(--dark-blue);
  border-radius: 0px 6px 6px 0px;
  max-width: 200px;
  min-width: 150px;
  z-index: 100;

  .active {
    background-color: var(--dark-blue);
    width: 105%;
    border-radius: 0px 6px 6px 0px;
    :hover {
      border-radius: 0px 6px 6px 0px;
    }
  }

  ${(props) =>
    props.breakpoint &&
    `
    z-index: 1000;
    position: fixed;

  ${
    props.isToggled &&
    `
    animation-name: show;
    animation-duration: 1s;
    @keyframes show {
    from {left: -100%;}
    to {left: 0;}
    }
    `
  }
    `};

  ${(props) =>
    props.breakpoint &&
    `
    z-index: 1000;
    position: fixed;
  ${
    !props.isToggled &&
    `
    animation-name: hide;
    animation-duration: 1s;
    @keyframes hide {
    from {left: 0;}
    to {left: -100%;}
    }
    `
  }

  `};
`;

export const DropDown = styled.div`
  /* visibility: hidden;
  position: relative;
  z-index: 200;
  background: red;
  margin-top: -100px;
  padding: 10px; */
`;


export const SectionTitle = styled.div<SectionTitleI>`
  border-bottom: var(--light-blue) 3px solid;
  border-top: transparent 3px solid;
  border-left: transparent 6px solid;
  border-right: transparent 6px solid;
  color: var(--cream-white);
  text-decoration-color: red;
  display: flex;
  justify-content: space-around;
  transition: 0.4s;
  :hover {

    background: var(--light-blue);
    border-radius: 0px 0px 0px 0px;
    border-bottom: transparent 3px solid;
    color: var(--dark-blue);

    & img {
      -webkit-filter: grayscale(50%) brightness(15%) sepia(100%)
        hue-rotate(-180deg) saturate(700%) contrast(0.8);
      filter: grayscale(50%) brightness(15%) sepia(100%) hue-rotate(-180deg)
        saturate(700%) contrast(0.8);
    }

    /* + ${DropDown} {
      visibility: visible;
    } */
  }

  & img {
    width: 75px;
    // min-width: 50px;
  }
`;

export const MobileBackground = styled.div<StyledNavbarI>`
  ${(props) =>
    props.breakpoint &&
    `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100%;
  background: transparent;
  backdrop-filter: blur(2px);
  `}
`;
