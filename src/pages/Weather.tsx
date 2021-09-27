import React, { useEffect, useState } from 'react'
import BoxWeather from '../components/BoxWeather/BoxWeather'
import { useFetch } from '../customHooks/useFetch'
import { myURLs } from '../assets/urls/urls'
import weatherBackup from '../assets/backup/backupWeather.json';

interface fetchDataI {
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
        query: "&query=Berlin",
    }
  };

interface weatherDataLocationI{
    name: string,
    country: string,
    localTime: string,
}

interface weatherDataCurrent {
    temperature: number,
    weatherIcon: string,
    weatherIconDescription: string
}

const shouldUseAPI = false;

const Weather = () => {

    const [loadNext, setLoadNext] =useState(false);
    var {obj: weatherData, loading: weatherLoading}: fetchDataI = useFetch(myURLs.weatherCurrent, loadNext,
         weatherOptions, weatherOptions.parameters, shouldUseAPI);
    const [weatherDataLocation, setWeatherDataLocation] = useState({name: "", country: "", localTime: new Date()});
    const [weatherDataCurrent, setWeatherDataCurrent] = useState({temperature: 0, weather_icons: [''], weather_descriptions: ['']});
    
    useEffect(()=>{
        if(weatherData!==undefined) {
        setWeatherDataCurrent({...weatherData.current});
        setWeatherDataLocation({...weatherData.location});
        }  
    },[weatherLoading]);

    useEffect(()=>{
         setWeatherDataCurrent({temperature: weatherBackup.current.temperature,
                weather_icons: weatherBackup.current.weather_icons,
                weather_descriptions: weatherBackup.current.weather_descriptions});
            setWeatherDataLocation({name: weatherBackup.location.name,
                country: weatherBackup.location.country,
                localTime: new Date(weatherBackup.location.localtime)});
                console.log(weatherBackup.current.weather_icons);
    },[])


    return (
        <>
        {!weatherData && <div>
            <BoxWeather 
            name={weatherDataLocation.name} 
            country={weatherDataLocation.country} 
            localTime={weatherDataLocation.localTime} 
            temperature={weatherDataCurrent.temperature} 
            weatherIcon={weatherDataCurrent.weather_icons} 
            weatherIconDescription={weatherDataCurrent.weather_descriptions} />
        </div>}
        {weatherData && <div>
            {weatherLoading && <BoxWeather 
            name={weatherDataLocation.name} 
            country={weatherDataLocation.country} 
            localTime={weatherDataLocation.localTime} 
            temperature={weatherDataCurrent.temperature} 
            weatherIcon={weatherDataCurrent.weather_icons} 
            weatherIconDescription={weatherDataCurrent.weather_descriptions} />}
        </div>}
        </>
    )
}

export default Weather
