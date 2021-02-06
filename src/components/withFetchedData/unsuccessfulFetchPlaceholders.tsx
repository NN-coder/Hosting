import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { MdErrorOutline } from 'react-icons/md';

import { Icon } from '../utils/Icon';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 300px;
  color: black;
  font-size: 2.5rem;
  row-gap: 10px;
`;

const rotate = keyframes`
  from {
    transform: rotate(1turn);
  }
  to {
    transform: rotate(0);
  }
`;
const LoadingIcon = styled(Icon)`
  animation: 0.8s ${rotate} linear infinite;
`;

const LoadingPlaceholder: React.FC = () => (
  <Wrapper>
    <LoadingIcon viewBox="0 0 508 508" size={60} color="var(--accent-color)">
      <g>
        <path
          d="M114.928,174.046l-28.8,28.8C114.48,109.944,212.776,57.617,305.677,85.969c35.405,10.805,66.498,32.506,88.851,62.012
            l25.488-19.312C350.79,37.151,220.481,19.078,128.962,88.304c-37.933,28.692-64.873,69.53-76.322,115.694l-30.016-29.952
            L0,196.654l68.8,68.8l68.8-68.8L114.928,174.046z"
        />
        <path
          d="M439.68,242.702l-68.8,68.8l22.624,22.624l29.136-29.12c-28.103,93.051-126.317,145.702-219.368,117.599
            c-37.011-11.178-69.311-34.231-91.912-65.599l-25.968,18.688c32.093,44.868,80.787,75.048,135.248,83.824
            c11.162,1.812,22.452,2.727,33.76,2.736c95.518-0.045,178.669-65.284,201.44-158.048l29.952,29.92l22.688-22.624L439.68,242.702z
            M438.88,288.798l0.816-0.816l1.184,1.2L438.88,288.798z"
        />
      </g>
    </LoadingIcon>
    Loading...
  </Wrapper>
);

const ErrorPlaceholder: React.FC<{ text: string }> = ({ text }) => (
  <Wrapper>
    <MdErrorOutline size={60} color="var(--accent-color)" />
    Error: {text}
  </Wrapper>
);

export { LoadingPlaceholder, ErrorPlaceholder };
