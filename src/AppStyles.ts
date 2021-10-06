import { Route } from "react-router";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import { StyledNavbar } from "./components/Navbar/NavbarStyles";
import Home from "./pages/Home";

export const StyledContent = styled.div`
grid-column: 4/16;
margin: 0px 20px;
`;

export const StyledApp = styled.div<{breakpoint: boolean}>`
width: 100vw;
height: 100vh;

    ${props => !props.breakpoint && ` 
    display: grid;
    grid-template-columns: repeat(15, 15fr);

    & ${StyledNavbar} {
    grid-column: 1/4;
    }
    `
    }

${props => props.breakpoint && `
    display: flex;
    flex-direction: column;

    & ${StyledNavbar} {
        position: fixed;
        z-index: 1000;
    }
`}
`;

