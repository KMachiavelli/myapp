import React, { useState } from "react";
import { Blurred } from "../AppStyles";
import Button from "../components/Button/Button";
import { StyledButton } from "../components/Button/ButtonStyles";
import CatBox from "../components/CatBox/CatBox";
import FactsBlock from "../components/FactsBlock/FactsBlock";
import {
  DivideLine,
  Section,
  StyledCats,
  InsideSectionContent,
  ModalWrapper,
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
          <Blurred blur={isFactsModalOn || isPicsModalOn} />
        )}
        {isFactsModalOn && (
          <ModalWrapper>
            <FactsBlock closePopup={factsToggle} />
          </ModalWrapper>
        )}
        {isPicsModalOn && (
          <ModalWrapper>
            <CatBox closeMethod={picsToggle} />
          </ModalWrapper>
        )}
      </StyledCats>
    </>
  );
};

export default Cats;
