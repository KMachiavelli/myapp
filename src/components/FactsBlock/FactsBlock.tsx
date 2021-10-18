import React, { useState, useEffect, useContext } from "react";
import { myURLs } from "../../assets/urls/urls";
import Button from "../Button/Button";
import { useFetch } from "../../customHooks/useFetch";
import { StyledFactsBlock, Title, Content } from "./FactsBlockStyles";
import iconLoading from "../../assets/icons/icon-loading.svg";
import { BreakPointI } from "../Navbar/Navbar";
import { BreakPointContext } from "../../App";
import bgCat from "../../assets/background-imgs/bg-cat.svg";
import CloseButton from "../CloseButton/CloseButton";

interface fetchData {
  obj: any;
  loading: boolean;
}

const catOptions = {
  method: "GET",
  headers: {},
};

export interface StyledFactsBlockI extends BreakPointI {
  srcBckg: string;
}

export interface FactsBlockI {
  closePopup: () => void;
}

const FactsBlock = ({ closePopup }: FactsBlockI) => {
  const [loadNext, setLoadNext] = useState(false);
  const { obj: myobj, loading: isLoading }: fetchData = useFetch(
    myURLs.catFacts,
    loadNext,
    { ...catOptions },
    { accessKey: " ", query: " " },
    true,
    true
  );
  const [loadingDisplay, setLoadingDisplay] = useState(true);
  const isMobile = useContext(BreakPointContext);

  useEffect(() => {
    setLoadingDisplay(false);
  }, [myobj]);

  const nextFact = () => {
    setLoadingDisplay(true);
    setLoadNext(!loadNext);
  };

  return (
    <StyledFactsBlock breakpoint={isMobile} srcBckg={bgCat}>
      <CloseButton closeMethod={closePopup} />
      <Title>
        <h1>Did you know?</h1>
      </Title>
      <Content>
        {isLoading && !loadingDisplay && myobj.fact}
        {loadingDisplay ? <img src={iconLoading} className="spinning" /> : ""}
      </Content>
      <Button buttonText="NEXT" clickHandle={nextFact} />
    </StyledFactsBlock>
  );
};

export default FactsBlock;
