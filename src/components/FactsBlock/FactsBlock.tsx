import React, {useState, useEffect} from 'react'
import { myURLs } from '../../assets/urls/urls';
import Button from '../Button/Button';
import { useFetch } from '../../customHooks/useFetch';
import { StyledFactsBlock, Title, Content} from './FactsBlockStyles';
import iconLoading from '../../assets/icons/icon-loading.svg';

interface fetchData {
  obj: any;
  loading: boolean;
}

const catOptions = {
    method: "GET",
    headers: {
      
    }
  }

const FactsBlock = () => {
  const [loadNext, setLoadNext] = useState(false);
  const {obj: myobj, loading: isLoading}: fetchData = useFetch(myURLs.catFacts, loadNext,
    {...catOptions}, {accessKey:" ", query: " "}, true);
  const [loadingDisplay, setLoadingDisplay] = useState(true);

  useEffect(()=>{
    setLoadingDisplay(false);
  },[myobj]);


  const nextFact = () => {
        setLoadingDisplay(true);
        setLoadNext(!loadNext);
  }
    return (
      <StyledFactsBlock>
        <Title>
          <h1>Did you know?</h1>
        </Title>
        <Content>
          {(isLoading && !loadingDisplay) && myobj.fact}
          {loadingDisplay ? <img src={iconLoading} className='spinning'/> : ''}
        </Content>
          <Button buttonText = "NEXT" clickHandle={nextFact} />
      </StyledFactsBlock>
    )
}

export default FactsBlock;
