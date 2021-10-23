import styled from "styled-components";

export const StyledRec = styled.div`
width: 100px;
height: 100px;
background: black;
animation: rotation 2s infinite linear;
`;

export const StyledRecWrapper = styled.div`
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`;