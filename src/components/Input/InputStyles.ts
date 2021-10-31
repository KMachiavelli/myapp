import styled from "styled-components";
import { InputI } from "./Input";

export const InputWrapper = styled.div`
  position: relative;
`;

export const Placeholder = styled.span<{ isSmthnTyped: boolean }>`
  z-index: 202;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 0.5s ease-in-out;
  transform: translate(-50%, -55%);
  pointer-events: none;

  ${(props) =>
    props.isSmthnTyped &&
    `
      left: calc(100% + 10px);
      color: var(--light-blue);
      font-weight: bold;
      transform: translate(0%, -55%);
  `};
`;

export const StyledInput = styled.input<InputI>`
  position: relative;
  top: 0;
  left: 0;
  z-index: 201;
  background: var(--ghost-white);
  color: var(--dark-blue);
  width: 100px;
  border-radius: 4px;
  border: none;

  :focus {
    outline: 3px var(--light-pink) solid;

    + ${Placeholder} {
      left: 105%;
      color: var(--light-blue);
      font-weight: bold;
      transform: translate(0%, -55%);
    }
  }

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
    border-width: 2px;
    border-style: solid;
  `}
  width: ${(props) => props.widthCustom}px;
`;
