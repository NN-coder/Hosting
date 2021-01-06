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
  &:hover,
  &:focus {
    background-color: var(--accent-color-active);
  }
`;

export { StandardBtn };
