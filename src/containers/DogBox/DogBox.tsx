import React, { useContext, useEffect, useRef, useState } from "react";
import { BreakPointContext } from "../../App";
import { myURLs } from "../../assets/urls/urls";
import { useFetch } from "../../customHooks/useFetch";
import Button from "../../components/Button/Button";
import { BreakPointI } from "../../components/Navbar/Navbar";
import {
  DogImage,
  InputDogsName,
  KorrektImage,
  StyledDogBox,
  StyledDogPicture,
  StyledGuessSection,
} from "./DogBoxStyles";
import iconOK from "../../assets/icons/icon-ok-darkblue.svg";
import iconReject from "../../assets/icons/icon-reject-darkblue.svg";

const dogOptions = {
  method: "GET",
  header: {},
  parameters: { accessKey: "", query: "" },
};

export interface DogBoxI extends BreakPointI {}

const DogBox = () => {
  const [loadNext, setLoadNext] = useState(false);
  const { obj: dogData, loading: isLoading } = useFetch(
    myURLs.dogPics,
    loadNext,
    { ...dogOptions },
    dogOptions.parameters,
    true,
    true
  );
  const [isCorrect, setIsCorrect] = useState(false);
  const [guessCounter, setGuessCounter] = useState(0);
  const nameRef: any = useRef(null);
  const isMobile = useContext(BreakPointContext);

  const nextDog = () => {
    setLoadNext(!loadNext);
    checkName();
  };

  const checkName = (guessedName?: string) => {
    if (nameRef.current.value === process.env.REACT_APP_GUESS_NAME)
      setIsCorrect(true);
    else setIsCorrect(false);
    setGuessCounter(guessCounter + 1);
  };

  const isWrong = () => {
    if (!isCorrect && guessCounter)
      // Nie moze byc w return bo zwraca 0 w html/JSX
      return true;
    else return false;
  };

  return (
    <StyledDogBox breakpoint={isMobile}>
      <StyledDogPicture>
        <h1>GUESS THIS DOG'S NAME</h1> <br />
        {isLoading && <DogImage src={dogData.message} breakpoint={isMobile} />}
      </StyledDogPicture>
      <StyledGuessSection>
        <InputDogsName type="text" ref={nameRef} placeholder="DOG'S NAME" />
      </StyledGuessSection>
      {isCorrect && <KorrektImage src={iconOK} />}
      {isWrong() && <KorrektImage src={iconReject} />}
      <Button clickHandle={nextDog} buttonText="NEXT DOG" />
    </StyledDogBox>
  );
};

export default DogBox;
