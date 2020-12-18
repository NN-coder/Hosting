import styled from 'styled-components';

const StandardBtn = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
  height: 55px;
  color: white;
  text-transform: uppercase;
  background-color: var(--accent-color);
  border: none;
  transition: background-color 0.15s ease;
  @media screen and (prefers-reduced-motion: reduce) {
    transition: none;
  }
  &:hover,
  &:focus {
    background-color: var(--accent-color-active);
  }
`;

export default StandardBtn;
