import React, { useContext, useState } from "react";
import { myURLs } from "../../assets/urls/urls";
import { useFetch } from "../../customHooks/useFetch";
import Button from "../../components/Button/Button";
import CloseButton from "../../components/CloseButton/CloseButton";
import { StyledCatPic } from "./CatBoxStyles";
import { BreakPointContext } from "../../App";

const catOptions = {
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  headers: {
    "x-api-key": process.env.REACT_APP_CATS_IMAGES,
  },
  parameters: {},
};

const isAPIOn = true;
const loadOnStart = true;

interface CatBoxI {
  closeMethod: () => void;
}

const CatBox = ({ closeMethod }: CatBoxI) => {
  const [loadNext, setLoadNext] = useState(false);
  const { obj: data, loading: isLoaded } = useFetch(
    myURLs.catImages,
    loadNext,
    catOptions,
    catOptions.parameters,
    isAPIOn,
    loadOnStart
  );

  const loadNextPic = () => {
    setLoadNext(!loadNext);
    if (isLoaded) console.log("CAT IMG: " + data[0].url);
  };

  return (
    <StyledCatPic>
      <CloseButton closeMethod={closeMethod} />
      {isLoaded && <img src={data[0].url}></img>}
      <Button clickHandle={loadNextPic} buttonText="NEXT PICTURE" />
    </StyledCatPic>
  );
};

export default CatBox;
