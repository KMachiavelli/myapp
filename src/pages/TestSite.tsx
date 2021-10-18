import React, { useState } from 'react'
import {StyledRec, StyledRecWrapper} from '../components/TestingComp/Rec';
import { useFetch } from '../customHooks/useFetch';
import {myURLs} from '../assets/urls/urls';

interface fetchData {
  obj: any;
  loading: boolean;
}

const weatherOptions = {
    method: "GET",
    // mode: 'no-cors',
    headers: {
    },
    parameters: {
        accessKey: `?access_key=`+process.env.REACT_APP_API_KEY_WEATHER,
        query: "&query=New York",
    }
  };

const TestSite = () => {

    const outAPIkey = () => {
        console.log(process.env.REACT_APP_API_KEY_WEATHER);
        setLoadNext(!loadNext);
        console.log(myobj);
    }

    const [loadNext, setLoadNext] = useState(true);

    const {obj: myobj, loading: isLoading}: fetchData = useFetch(`http://api.weatherstack.com/current`, loadNext, weatherOptions, weatherOptions.parameters, false, false);

    return (
        <div>
            TESTINGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:
            <StyledRecWrapper>
            <StyledRec />
            </StyledRecWrapper>
            <button type='button' onClick={outAPIkey}>getAPIKEY</button>
            
        </div>
    )
}

export default TestSite
