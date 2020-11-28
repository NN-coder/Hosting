import styled from 'styled-components';

const StandardBtn = styled.button`
  height: 55px;
  color: white;
  text-transform: uppercase;
  background-color: #ff8261;
  border: none;
  transition: background-color 0.15s ease;
  @media screen and (prefers-reduced-motion: reduce) {
    transition: none;
  }
  &:hover,
  &:focus {
    background-color: #52cbf8;
  }
`;

export default StandardBtn;
