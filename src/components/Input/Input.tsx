import React, { useEffect, useState } from "react";
import { InputWrapper, Placeholder, StyledInput } from "./InputStyles";

export interface InputI {
  widthCustom?: number;
  isDark?: boolean;
  placeholder?: string;
  bottomBorder?: boolean;
  refInput?: React.MutableRefObject<null>;
}

const Input = ({
  widthCustom,
  placeholder,
  bottomBorder,
  isDark,
  refInput,
}: InputI) => {
  const [toMove, setToMove] = useState(false);

  const changeHandler = (ref: React.MutableRefObject<null> | undefined) => {
    if (ref!.current) console.log(ref!.current["value"]);
    if (ref?.current) {
      console.log("TYPED");
      if (ref?.current["value"]) setToMove(true);
      else setToMove(false);
    } else setToMove(false);
  };
  return (
    <InputWrapper>
      <StyledInput
        widthCustom={widthCustom}
        bottomBorder={bottomBorder}
        isDark={isDark}
        ref={refInput}
        onChange={() => {
          changeHandler(refInput);
        }}
      />
      <Placeholder isSmthnTyped={toMove || false}>{placeholder}</Placeholder>
    </InputWrapper>
  );
};

export default Input;
