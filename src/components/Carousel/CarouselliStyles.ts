import styled from "styled-components";

export const StyledCarouselli = styled.div<{
  numberOfComponents: number;
  width?: number;
}>`
  position: relative;
  background: var(--dark-blue);
  color: var(--light-blue);
  display: grid;
  grid-template-columns: repeat(${(props) => props.numberOfComponents}, 100%);
  overflow-x: hidden;
  width: ${(props) => props.width}px;
  scroll-behavior: smooth;
  height: fit-content;
  border-radius: 5px;
`;

export const CarouselliComponent = styled.div`
  display: flex;
  justify-content: center;
`;

export const CarouselliButton = styled.button<{ bckg: string }>`
  border: none;
  opacity: 30%;
  border: none;
  width: 50px;
  background: var(--light-pink);
  background-image: url(${(props) => props.bckg});
  background-repeat: no-repeat;
  background-size: 90%;
  background-position-x: center;
  background-position-y: center;
  color: var(--dark-blue);
  font-weight: 1000;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    opacity: 70%;
  }
  :active {
    transition: 0.05s ease-in-out;
    opacity: 100%;
    padding: 0 10px;
  }
`;

export const CarouselliButtonsWrapper = styled.div<{
  width: number;
  currentHeight: number;
  refresh: boolean;
}>`
  display: flex;
  position: fixed;
  width: ${(props) => props.width}px;
  justify-content: space-between;
  flex-direction: row-reverse;

  height: ${(props) => props.currentHeight}px;
`;

export const CarouselliDots = styled.div<{
  width: number;
  currentHeight: number;
  refresh?: boolean;
}>`
  display: flex;
  position: fixed;
  justify-items: center;
  justify-content: center;
  top: ${(props) => props.currentHeight - 15}px;
  width: ${(props) => props.width}px;
`;

export const CarouselliDot = styled.button<{ isActive: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: var(--light-blue);
  opacity: 40%;
  box-shadow: 1px 1px var(--dark-blue);
  border: none;
  cursor: pointer;
  margin: -15px 15px;
  transition: 0.5s ease-in-out;
  :hover {
    opacity: 60%;
  }

  ${(props) =>
    props.isActive &&
    `
    opacity: 100%;
  `};
`;

export const CarouselliInsideComponent = styled.div`
  margin: 0px 10%;
`;
