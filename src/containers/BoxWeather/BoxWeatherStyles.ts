import styled from "styled-components";

export const StyledBoxWeather = styled.div`
    background: var(--cream-white);
    border: var(--dark-blue) 11px solid;
    border-radius: 10px;
`;

export const StyledHeader = styled.div`
    background: var(--dark-blue);
    color: var(--cream-white);
    text-align: center;
    border: var(--cream-white) 4px solid;
    border-radius: 10px 10px 0 0;
    padding: 5px;
`;

export const StyledMiddle = styled.div`
text-align: center;
`;

export const StyledBottom = styled.div`
    background: var(--dark-blue);
    color: var(--cream-white);
    overflow: auto;
    border: var(--cream-white) 4px solid;
    border-radius: 0 0 10px 10px;

    & h2 {
        float: left;
        margin: 0 0;
    }

    &  img{
        float: left;
        border-radius: 20%;
        margin: 10px;
        height: 60px;
        width: 60px;
        box-shadow: 2px 2px 1px 1px var(--light-blue);
    }
`;

export const InputWrapper = styled.div`
    background: red;
`;