import React, { useState } from "react";
import { Blurred } from "../AppStyles";
import Button from "../components/Button/Button";
import { StyledButton } from "../components/Button/ButtonStyles";
import CatBox from "../containers/CatBox/CatBox";
import FactsBlock from "../containers/FactsBlock/FactsBlock";
import {
  DivideLine,
  Section,
  StyledCats,
  InsideSectionContent,
  ModalCatWrapper,
} from "./CatsStyles";

const Cats = () => {
  const [isFactsModalOn, setIsFactsModalOn] = useState(false);
  const [isPicsModalOn, setIsPicsModalOn] = useState(false);

  const factsToggle = () => {
    setIsFactsModalOn(!isFactsModalOn);
  };

  const picsToggle = () => {
    setIsPicsModalOn(!isPicsModalOn);
  };

  const closeBoth = () => {
    setIsFactsModalOn(false);
    setIsPicsModalOn(false);
  };

  return (
    <>
      <StyledCats>
        <Section>
          <InsideSectionContent>
            <h1>IF U WANT TO SEE NEW COOL CAT PICS</h1>
            <Button clickHandle={picsToggle} buttonText={"CLICK HERE"} />
          </InsideSectionContent>
        </Section>
        <DivideLine />
        <Section>
          <InsideSectionContent>
            <h1>IF U WANT TO KNOW NEW CAT FACTS</h1>
            <Button clickHandle={factsToggle} buttonText={"CLICK HERE"} />
          </InsideSectionContent>
        </Section>
        {(isFactsModalOn || isPicsModalOn) && (
          <Blurred blur={isFactsModalOn || isPicsModalOn} onClick={closeBoth} />
        )}
        {isFactsModalOn && (
          <ModalCatWrapper>
            <FactsBlock closePopup={factsToggle} />
          </ModalCatWrapper>
        )}
        {isPicsModalOn && (
          <ModalCatWrapper>
            <CatBox closeMethod={picsToggle} />
          </ModalCatWrapper>
        )}
      </StyledCats>
    </>
  );
};

export default Cats;
