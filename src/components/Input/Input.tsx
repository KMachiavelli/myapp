import React from "react";
import { StyledInput } from "./InputStyles";

export interface InputI {
  widthCustom?: number;
  isDark?: boolean;
  placeholder?: string;
  bottomBorder?: boolean;
}

const Input = ({ widthCustom, placeholder, bottomBorder, isDark }: InputI) => (
  <StyledInput
    widthCustom={widthCustom}
    placeholder={placeholder}
    bottomBorder={bottomBorder}
    isDark={isDark}
  />
);

export default Input;
