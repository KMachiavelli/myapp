import React, { useContext, useRef, useState } from "react";
import { BreakPointContext } from "../../App";
import { myURLs } from "../../assets/urls/urls";
import Button from "../Button/Button";
import Input, { InputI } from "../Input/Input";
import { Placeholder, StyledInput } from "../Input/InputStyles";
import { useFetch } from "../../customHooks/useFetch";
import { StyledFormulae } from "./FormulaeStyles";

interface FormulaeI extends InputI {
  // refInput1?: React.MutableRefObject<null>;
  // refInput2?: React.MutableRefObject<null>;
  placeholderUpper?: string;
  placeholderBottom?: string;
}

const Formulae = ({
  bottomBorder,
  isDark,
  widthCustom,
  placeholderBottom,
  placeholderUpper,
}: FormulaeI) => {
  const [loadNext, setLoadNext] = useState(false);
  const [bodyToSubmit, setBodyToSubmit] = useState({});
  const refInput1 = useRef(null);
  const refInput2 = useRef(null);
  const breakPointContext = useContext(BreakPointContext);
  const submitOptions = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    parameters: {},
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyToSubmit), // body data type must match "Content-Type" header
  };

  const dataToSubmit = useFetch(
    myURLs.local,
    loadNext,
    submitOptions,
    submitOptions.parameters,
    true,
    false
  );

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (refInput1?.current && refInput2!.current)
      setBodyToSubmit({
        name: refInput1?.current["value"],
        email: refInput2?.current["value"],
        age: "19",
      });
    console.log(bodyToSubmit);
    setLoadNext(!loadNext);
  };

  return (
    <StyledFormulae onSubmit={submitHandler}>
      <Input
        bottomBorder={bottomBorder}
        isDark={isDark}
        widthCustom={widthCustom}
        refInput={refInput1}
        placeholder={placeholderUpper}
      />
      <Input
        bottomBorder={bottomBorder}
        isDark={isDark}
        widthCustom={widthCustom}
        refInput={refInput2}
        placeholder={placeholderBottom}
      />
      <Button type="submit" buttonText="SUBMIT" isAltered={true} />
    </StyledFormulae>
  );
};

export default Formulae;
