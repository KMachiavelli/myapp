import styled from "styled-components";
import { StyledButton } from "../Button/ButtonStyles";
import { StyledInput } from "../Input/InputStyles";

export const StyledFormulae = styled.form`
  position: relative;
  background: var(--dark-blue);
  border-radius: 5px;
  // width: fit-content;
  width: 275px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  ${StyledInput} {
    margin: 10px 0;
  }

  ${StyledButton} {
    margin: 10px 0;
  }
`;
