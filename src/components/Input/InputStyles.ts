import styled from "styled-components";
import { InputI } from "./Input";

export const StyledInput = styled.input<InputI>`
  // light-full (default)
  background: var(--ghost-white);
  color: var(--dark-blue);
  border-color: var(--dark-blue);
  border-style: solid;
  width: 100px;
  border-width: 2px;

  ${(props) =>
    props.bottomBorder &&
    `
    border-width: 0 0 2px 0;
    outline: none;
    `};
  ${(props) =>
    props.isDark &&
    `
    background: var(--dark-blue);
    color: var(--light-blue);
    border-color: var(--light-blue);
  `}
  width: ${(props) => props.widthCustom}px;
`;
