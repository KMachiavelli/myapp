import React from "react";
import { StyledCloseButton } from "./CloseButtonStyles";
import iconClosePink from "../../assets/icons/icon-close-pink.svg";
import iconClosePinkHover from "../../assets/icons/icon-close-pink-hover.svg";

export interface CloseButtonI {
  closeMethod: () => void;
}

const CloseButton = ({ closeMethod }: CloseButtonI) => (
  <StyledCloseButton
    onClick={closeMethod}
    src={iconClosePink}
    srcHover={iconClosePinkHover}
  />
);

export default CloseButton;
