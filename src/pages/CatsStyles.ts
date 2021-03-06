import styled from "styled-components";
import { StyledButton } from "../components/Button/ButtonStyles";

export const StyledCats = styled.div<{ bckSrc: string }>`
  position: relative;
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: 49.8% auto 49.8%;
  grid-template-rows: 1fr;
  border-right: dotted var(--light-blue) 10px;
  z-index: 101;
  background-color: var(--ghost-white);
  background-image: url(${(props) => props.bckSrc});
  background-repeat: no-repeat;
  background-size: 70%;
  background-position-x: center;
  background-position-y: center;
`;

export const DivideLine = styled.div`
  height: 100%;
  background: linear-gradient(
    180deg,
    var(--ghost-white),
    var(--dark-blue),
    var(--ghost-white)
  );
  display: flex;
  align-self: center;
`;

export const Section = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  transition: 0.5s linear;
  color: var(--dark-blue);
  :hover {
    background-color: var(--dark-blue);

    + ${DivideLine} {
      background: linear-gradient(
        180deg,
        var(--dark-blue),
        var(--light-blue),
        var(--dark-blue)
      );
    }

    h1 {
      color: var(--light-blue);
    }
  }
`;

export const InsideSectionContent = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    text-align: center;
    margin: 10px 10px;
  }

  ${StyledButton} {
    align-self: center;
    width: 80%;
  }
`;

export const ModalCatWrapper = styled.div`
  width: 70%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 501;
  display: flex;
  align-content: center;
  justify-content: center;

  > * {
    align-self: center;
  }
`;
