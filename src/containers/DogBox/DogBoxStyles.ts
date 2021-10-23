import styled from "styled-components";
import { StyledButton } from "../../components/Button/ButtonStyles";
import { BreakPointI } from "../../components/Navbar/Navbar";
import { DogBoxI } from "./DogBox";

export const StyledDogBox = styled.div<DogBoxI>`
  height: 100vh;
  min-height: 700px;
  max-height: 900px;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(11, 1fr);
  overflow-y: auto;

  & h1 {
    width: 100%;
    font-size: 60px;
    color: var(--dark-blue);
    text-align: center;
    margin-bottom: 0;
  }

  & ${StyledButton} {
    grid-row: 11 / 11;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    margin-bottom: 10px;
  }

  ${(props) =>
    props.breakpoint &&
    `
    border-left: hidden;
    h1{
        font-size: 40px;
    }
`};
`;

export const StyledDogPicture = styled.div`
  grid-row: 1/9;
`;

export const StyledGuessSection = styled.div`
  grid-row: 9/10;
  position: relative;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;

  input {
    height: 30px;
    max-width: 150px;
    border-top: hidden;
    border-right: hidden;
    border-left: hidden;
    text-align: center;
    font-size: 20px;
    ::placeholder {
      text-align: center;
      font-size: 20px;
    }
    :focus {
      outline: none;
    }
  }
`;

export const DogImage = styled.img<BreakPointI>`
  height: 60%;
  min-height: 300px;
  border-radius: 15px;
  box-shadow: 15px 15px 30px var(--dark-blue);
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  filter: grayscale(75%);

  ${(props) =>
    props.breakpoint &&
    `
        width: 90%;
        min-width: 230px;
        `}
`;

export const KorrektImage = styled.img`
  width: 50px;
  height: 50px;
  grid-row: 10/11;
  justify-self: center;
`;

export const InputDogsName = styled.input`
  justify-self: center;
  background: transparent;
`;
