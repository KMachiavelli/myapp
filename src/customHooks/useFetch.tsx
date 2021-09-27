import React, {useState, useEffect} from 'react'

interface fetchDataI {
  obj: any;
  loading: boolean;
}

interface ParametersI {
  accessKey: string,
  query: string,
}

export const useFetch = (url: string, loadNext: boolean, options: object | undefined, parameters: ParametersI, isON: boolean) => {

    const [data, setData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    const {accessKey, query} = parameters;

    const getAPI = async () => {
       const fetchedData = await fetch(url+accessKey+query, 
        {...options});
       const fetchJSON = await fetchedData.json();
       setIsLoaded(true);
       setData({obj: fetchJSON, loading: isLoaded});
       console.log(options);
    }

    useEffect(() => {
      if(isON)
        getAPI();
      else {
    setData({});
    setIsLoaded(false); }
    },[isLoaded, loadNext]);


    return data as fetchDataI;
}

