import styled from "styled-components";

export const StyledCloseButton = styled.button<{
  src: string;
  srcHover: string;
}>`
  width: 45px;
  height: 45px;
  background-image: url(${(props) => props.src});
  background-color: transparent;
  border: none;
  transition: 0.2s ease-in-out;

  :hover {
    cursor: pointer;
    background-image: url(${(props) => props.srcHover});
  }
`;
