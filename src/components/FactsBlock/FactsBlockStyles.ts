import styled from "styled-components";
import { StyledButton } from "../Button/ButtonStyles";

export const StyledFactsBlock = styled.div`
  position: relative;
  max-width: 500px;
  min-width: 500px;
  background-color: var(--light-pink);
  border: 4px groove var(--dark-blue);
  border-radius: 7px;
  min-height: 300px;

  @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

  & img.spinning {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 40%;
        animation: rotation 1s infinite linear;
  }
  text-align: center;

  ${StyledButton} {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

`;

export const Title = styled.div`
background-color: var(--dark-blue);
  width: 100%;
  color: var(--cream-white);
  text-align: center;
`;

export const Content = styled.div`
  color: var(--dark-blue);
  font-size: 25px;
  font-weight: bold;
  text-align: justify;
  margin: 10px;
  height: 90%;
`;




