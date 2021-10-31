import styled from "styled-components";
import { BreakPointI } from "../Navbar/Navbar";
import { ButtonI, StyledButtonI } from "./Button";

export const StyledButton = styled.button<StyledButtonI>`
  width: 150px;
  height: fit-content;
  background-color: var(--dark-blue);
  color: var(--cream-white);
  font-size: 30px;
  text-align: center;
  border: hidden;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.15s ease-in-out;

  :hover {
    background-color: var(--light-blue);
  }

  :active {
    width: 160px;
  }

  ${(props) =>
    props.breakpoint &&
    `
      width: 100px;
      font-size: 20px;
    `};

  ${(props) =>
    props.isAltered &&
    `
    background-color: var(--light-blue);
    color: var(--dark-blue);
    border: hidden;
      :hover {
        background-color: var(--dark-medium-blue);
        color: var(--light-blue);
        outline: var(--light-blue) 3px solid;
      }
    `};
`;
