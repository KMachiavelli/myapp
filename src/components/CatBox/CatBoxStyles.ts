import styled from "styled-components";
import { StyledButton } from "../Button/ButtonStyles";
import { StyledCloseButton } from "../CloseButton/CloseButtonStyles";

export const StyledCatPic = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    max-height: 60%;
    min-height: 60%;
    align-self: center;
    border: solid var(--light-pink) 3px;
    border-radius: 3px;
    filter: grayscale(75%);
    box-shadow: -5px -5px 10px var(--dark-blue);
  }

  ${StyledButton} {
    align-self: center;
  }

  ${StyledCloseButton} {
    align-self: center;
  }
`;
