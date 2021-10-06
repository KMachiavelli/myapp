import React, { useContext, useRef, useState } from 'react'
import { BreakPointContext } from '../../App'
import { myURLs } from '../../assets/urls/urls'
import { useFetch } from '../../customHooks/useFetch'
import Button from '../Button/Button'
import { BreakPointI } from '../Navbar/Navbar'
import { StyledDogBox, StyledDogPicture, StyledGuessSection, StyledVerify } from './DogBoxStyles'

const dogOptions = {
    method: "GET",
    header: {},
    parameters: {accessKey: "", query: ""}
}

export interface DogBoxI extends BreakPointI{
};

const DogBox = () => {
    const [loadNext, setLoadNext] = useState(false);
    const {obj: dogData, loading: isLoading} = useFetch(myURLs.dogPics, loadNext, {...dogOptions}, 
        dogOptions.parameters, true);
    const [isCorrect, setIsCorrect] = useState(false);
    const nameRef: any = useRef(null);
    const isMobile = useContext(BreakPointContext);

    const nextDog = () => {
        setLoadNext(!loadNext);
        checkName();
    }

    const checkName = (guessedName?: string) => {
        if(nameRef.current.value === process.env.REACT_APP_GUESS_NAME)
            setIsCorrect(true);
        
        else setIsCorrect(false);

        console.log(process.env.REACT_APP_GUESS_NAME);
        console.log(nameRef.current.value);
    }

    const onChangeHandle = () => {

    }

    
    return (
        <StyledDogBox breakpoint={isMobile}>
            <StyledDogPicture>
            <h1>GUESS THIS DOG'S NAME</h1> <br/>
            {isLoading && <img src={dogData.message} />}
            </StyledDogPicture>
            <StyledGuessSection>
            <input type="text" onChange={onChangeHandle} ref={nameRef} placeholder="DOG'S NAME"></input>
            </ StyledGuessSection>
            {isCorrect && <StyledVerify><h2>Oll Korrekt</h2> </StyledVerify>}
            <Button clickHandle={nextDog} buttonText="NEXT DOG" />   
        </StyledDogBox>
    )
}

export default DogBox
