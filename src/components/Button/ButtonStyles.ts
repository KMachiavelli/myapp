import styled from 'styled-components';

export const StyledButton =  styled.button`
  width: 150px;
  height: fit-content;
  background-color: var(--dark-blue);
  color: var(--cream-white);
  font-size: 30px;
  text-align: center;
  border: hidden;
  border-radius: 5px;

   :hover {
    transition: 0.3s ease-in-out;
    background-color: var(--light-blue);
  }
`;
