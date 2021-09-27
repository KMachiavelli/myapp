import styled from "styled-components";

export const StyledNavbar = styled.div`
float: left;
margin-right: 10px;
height: 100vh;
width: 100%;
background: var(--dark-blue);
border-radius: 0px 6px 6px 0px;
max-width: 200px;
min-width: 150px;
`;

export const SectionTitle = styled.div`
border-bottom: var(--light-blue) 3px solid;
border-top: transparent 3px solid;
border-left: transparent 6px solid;
border-right: transparent 6px solid;
color: var(--cream-white);
text-decoration-color: red;
text-align: center;
transition: 0.6s;
:hover {
    background: var(--light-blue);
    border-radius: 0px 0px 0px 0px;
    border-bottom: transparent 3px solid;
    color: var(--dark-blue);
}
`;
