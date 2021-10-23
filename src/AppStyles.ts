import { Route } from "react-router";
import styled from "styled-components";
import { StyledNavbar } from "./components/Navbar/NavbarStyles";

export const StyledContent = styled.div`
  grid-column: 4/16;
  margin: 0 20px;
  border-left: 10px dotted var(--light-blue);
`;

export const StyledApp = styled.div<{ breakpoint: boolean }>`
  width: 100vw;
  height: 100vh;
  background: var(--ghost-white);
  font-size: 16px;

  ${(props) =>
    !props.breakpoint &&
    ` 
    display: grid;
    grid-template-columns: repeat(15, 1fr);

    & ${StyledNavbar} {
    grid-column: 1/4;
    }
    `}

  ${(props) =>
    props.breakpoint &&
    `
    display: flex;
    flex-direction: column;

    & ${StyledNavbar} {
        position: fixed;
        z-index: 1000;
    }

    & ${StyledContent} {
        margin-left: 70px;
    }
`}
`;

export interface BlurredI {
  blur: boolean;
  clickHandle?: () => void;
}

export const Blurred = styled.div<BlurredI>`
  ${(props) =>
    props.blur &&
    `   visibility: visible;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
        width: 105%;
        height: 100%;
        overflow: none;
        background: transparent;
        backdrop-filter: blur(2px);
    `}
`;
