import React, { useContext } from 'react'
import { BreakPointContext } from '../../App';
import '../../assets/colors.css'
import { StyledButton } from './ButtonStyles';

export interface ButtonI {
    clickHandle: any;
    buttonText: string;
}

const Button = (props : ButtonI) => {
    const breakPointContext = useContext(BreakPointContext);
    return (
            <StyledButton onClick={props.clickHandle} breakpoint={breakPointContext}>{props.buttonText}</StyledButton>       
    )
}

export default Button
