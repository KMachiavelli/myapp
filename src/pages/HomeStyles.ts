import styled from "styled-components";
import { StyledHomeI } from "./Home";

export const StyledHome =  styled.div<StyledHomeI>`

    ${props => props.breakpoint && `
        color: red;
    `}
`;