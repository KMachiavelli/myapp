import React, {useState, useEffect} from 'react'

interface fetchDataI {
  obj: any;
  loading: boolean;
}

interface ParametersI {
  accessKey?: string,
  query?: string,
}

export const useFetch = (url: string, loadNext: boolean, options: object | undefined, parameters: ParametersI, isON: boolean,
  loadOnStart: boolean) => {

    const [data, setData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [counter, setCounter] = useState(0);

    const {accessKey, query} = parameters;

    const getAPI = async () => {
      if(counter > 0 || loadOnStart) {
       let fetchedData = await fetch(url+ (accessKey ? accessKey : "") + (query ? query : ""), 
        {...options});
       let fetchJSON = await fetchedData.json();
       console.log(fetchedData);
       console.log(fetchJSON);
       setIsLoaded(true);
       setData({obj: fetchJSON, loading: isLoaded});
       console.log(counter);
      }
    }

    useEffect(() => {
      if(isON)
      getAPI();
      else {
    setData({});
    setIsLoaded(false); }
    setCounter(counter+1);
    },[loadNext, isLoaded]);

    return data as fetchDataI;
}

