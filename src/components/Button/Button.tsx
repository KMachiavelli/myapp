import React, { useContext } from "react";
import { BreakPointContext } from "../../App";
import "../../assets/colors.css";
import { BreakPointI } from "../Navbar/Navbar";
import { StyledButton } from "./ButtonStyles";

export interface ButtonI {
  clickHandle?: any;
  buttonText?: string;
  type?: "button" | "submit" | "reset" | undefined;
  isAltered?: boolean;
}

export interface StyledButtonI extends ButtonI, BreakPointI {}

const Button = (props: ButtonI) => {
  const breakPointContext = useContext(BreakPointContext);
  return (
    <StyledButton
      onClick={props.clickHandle}
      breakpoint={breakPointContext}
      type={props.type || "button"}
      isAltered={props.isAltered}
    >
      {props.buttonText}
    </StyledButton>
  );
};

export default Button;
