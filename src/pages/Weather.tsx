import React, { useEffect, useRef, useState } from "react";
import BoxWeather from "../containers/BoxWeather/BoxWeather";
import { useFetch } from "../customHooks/useFetch";
import { myURLs } from "../assets/urls/urls";
import weatherBackup from "../assets/backup/backupWeather.json";
import { StyledWeather } from "./WeatherStyles";

interface fetchDataI {
  obj: any;
  loading: boolean;
}

const weatherOptions = {
  method: "GET",
  // mode: 'no-cors',
  headers: {},
  parameters: {
    accessKey: `?access_key=` + process.env.REACT_APP_API_KEY_WEATHER,
    query: "",
  },
};

interface weatherDataLocationI {
  name: string;
  country: string;
  localTime: string;
}

interface weatherDataCurrent {
  temperature: number;
  weatherIcon: string;
  weatherIconDescription: string;
}

const shouldUseAPI = false;

const Weather = () => {
  const [loadNext, setLoadNext] = useState(false);
  const [newWeatherParameters, setNewWeatherParameters] = useState({
    accessKey: `?access_key=` + process.env.REACT_APP_API_KEY_WEATHER,
    query: "&query=Warsaw",
  });
  var { obj: weatherData, loading: weatherLoading }: fetchDataI = useFetch(
    myURLs.weatherCurrent,
    loadNext,
    { ...weatherOptions },
    newWeatherParameters,
    shouldUseAPI,
    false
  );
  const [weatherDataLocation, setWeatherDataLocation] = useState({
    name: "",
    country: "",
    localTime: new Date(),
  });
  const [weatherDataCurrent, setWeatherDataCurrent] = useState({
    temperature: 0,
    weather_icons: [""],
    weather_descriptions: [""],
  });
  const inputWeatherRef = useRef();

  useEffect(() => {
    if (weatherData !== undefined) {
      setWeatherDataCurrent({ ...weatherData.current });
      setWeatherDataLocation({ ...weatherData.location });
    }
  }, [weatherLoading, newWeatherParameters]);

  useEffect(() => {
    setWeatherDataCurrent({
      temperature: weatherBackup.current.temperature,
      weather_icons: weatherBackup.current.weather_icons,
      weather_descriptions: weatherBackup.current.weather_descriptions,
    });
    setWeatherDataLocation({
      name: weatherBackup.location.name,
      country: weatherBackup.location.country,
      localTime: new Date(weatherBackup.location.localtime),
    });
    console.log(weatherBackup.current.weather_icons);
    setLoadNext(!loadNext);
  }, []);

  const submitWeather = () => {
    if (inputWeatherRef.current) {
      console.log(inputWeatherRef.current["value"]);
      setNewWeatherParameters((params) => {
        if (inputWeatherRef.current) {
          console.log({
            ...params,
            query: "&query=" + inputWeatherRef!.current["value"],
          });
          return {
            ...params,
            query: "&query=" + inputWeatherRef!.current["value"],
          };
        } else return params;
      });
    }
    setLoadNext(!loadNext);
    setWeatherDataCurrent({ ...weatherData.current });
    setWeatherDataLocation({ ...weatherData.location });
    setWeatherDataCurrent({
      temperature: weatherBackup.current.temperature,
      weather_icons: weatherBackup.current.weather_icons,
      weather_descriptions: weatherBackup.current.weather_descriptions,
    });
    setWeatherDataLocation({
      name: weatherBackup.location.name,
      country: weatherBackup.location.country,
      localTime: new Date(weatherBackup.location.localtime),
    });
    console.log(weatherBackup.current.weather_icons);
    console.log(weatherData);
  };

  return (
    <StyledWeather>
      {/* {!weatherData && <div>
            <BoxWeather 
            name={weatherDataLocation.name} 
            country={weatherDataLocation.country} 
            localTime={weatherDataLocation.localTime} 
            temperature={weatherDataCurrent.temperature} 
            weatherIcon={weatherDataCurrent.weather_icons} 
            weatherIconDescription={weatherDataCurrent.weather_descriptions}
            inputRef={inputWeatherRef}
            submitWeather={submitWeather} />
        </div>} */}
      {weatherData && (
        <div>
          {weatherLoading && (
            <BoxWeather
              name={weatherDataLocation.name}
              country={weatherDataLocation.country}
              localTime={weatherDataLocation.localTime}
              temperature={weatherDataCurrent.temperature}
              weatherIcon={weatherDataCurrent.weather_icons}
              weatherIconDescription={weatherDataCurrent.weather_descriptions}
              inputRef={inputWeatherRef}
              submitWeather={submitWeather}
            />
          )}
        </div>
      )}
      {!weatherData && <div>AAAAAAAAAAAAAAAAAAA</div>}
    </StyledWeather>
  );
};

export default Weather;
