import styled from "styled-components";
import { StyledButton } from "../../components/Button/ButtonStyles";
import { StyledCloseButton } from "../../components/CloseButton/CloseButtonStyles";
import { StyledFactsBlockI } from "./FactsBlock";

export const StyledFactsBlock = styled.div<StyledFactsBlockI>`
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--dark-blue);
  background-image: url(${(props) => props.srcBckg});
  background-repeat: no-repeat;
  background-size: auto 70%;
  background-position-x: 50%;
  background-position-y: 80%;
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
    border: var(--light-blue) 2px solid;
  }

  ${StyledCloseButton} {
    margin: 10px;
  }

  h1 {
    margin-top: 0px;
  }
`;

export const Title = styled.div`
  background-color: var(--light-pink);
  width: 100%;
  color: var(--dark-blue);
  font-size: 24px;
  text-align: center;
`;

export const Content = styled.div`
  color: var(--light-blue);
  font-size: 25px;
  font-weight: bold;
  text-align: justify;
  margin: 10px;
  // height: 90%;
`;
