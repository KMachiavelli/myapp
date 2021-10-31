import React, {
  LegacyRef,
  useRef,
  createRef,
  RefObject,
  useContext,
} from "react";
import { BreakPointContext } from "../../App";
import Button from "../../components/Button/Button";
import {
  InputWrapper,
  StyledBottom,
  StyledBoxWeather,
  StyledHeader,
  StyledMiddle,
} from "./BoxWeatherStyles";

interface BoxWeatherI {
  name: string;
  country: string;
  localTime: Date;
  temperature: number;
  weatherIcon: Array<string>;
  weatherIconDescription: Array<string>;
  inputRef?: any;
  submitWeather?: Function;
}

const BoxWeather = (props: BoxWeatherI) => {
  const {
    name,
    country,
    localTime,
    temperature,
    weatherIcon,
    weatherIconDescription,
    inputRef,
    submitWeather,
  } = props;
  return (
    <StyledBoxWeather>
      <InputWrapper>
        <input type="text" ref={inputRef} />
        <Button clickHandle={submitWeather} buttonText="GET WEATHER" />
      </InputWrapper>
      <StyledHeader>
        <h1>{name + `, ` + country}</h1>
      </StyledHeader>
      <StyledMiddle>
        {localTime && <h2>Local Time: {localTime.toUTCString()}</h2>}
        <h2>Temperature: {temperature + `C`}</h2>
      </StyledMiddle>
      <StyledBottom>
        <h2>
          <img src={weatherIcon[0]} />
          {weatherIconDescription[0]}
        </h2>
      </StyledBottom>
    </StyledBoxWeather>
  );
};

export default BoxWeather;
