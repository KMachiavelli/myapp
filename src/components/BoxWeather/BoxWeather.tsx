import React from 'react'
import { StyledBottom, StyledBoxWeather, StyledHeader, StyledMiddle } from './BoxWeatherStyles'

interface BoxWeatherI {
name: string,
country: string,
localTime: Date,
temperature: number,
weatherIcon: Array<string>,
weatherIconDescription: Array<string>,
}

const BoxWeather = (props: BoxWeatherI) => {
    const {name, country, localTime, temperature, weatherIcon, weatherIconDescription} = props;
    return (
        <StyledBoxWeather>
            <StyledHeader>
            <h1>{name+`, `+country}</h1>
            </ StyledHeader>
            <StyledMiddle>
            <h2>Local Time: {localTime.toUTCString()}</h2>
            <h2>Temperature: {temperature + `C`}</h2>
            </ StyledMiddle>
            <StyledBottom>
            <h2> 
                <img src={weatherIcon[0]} /> 
                {weatherIconDescription[0]}
            </h2>
            </StyledBottom>
        </StyledBoxWeather>
    )
}

export default BoxWeather
