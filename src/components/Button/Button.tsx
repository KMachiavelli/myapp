import React from 'react'
import '../../assets/colors.css'
import { StyledButton } from './ButtonStyles';

interface ButtonI {
    clickHandle: any;
    buttonText: string;
}

const Button = (props : ButtonI) => {
    return (
            <StyledButton onClick={props.clickHandle}>{props.buttonText}</StyledButton>       
    )
}

export default Button
