import React from 'react';
import styled from 'styled-components';

import { getSingleImage } from './img';

export interface Props {
  className?: string;
}

const LoadingScreen: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <img src={getSingleImage('loading', 'gif')} alt="Loading" width="350px" height="250px" />
    Loading...
  </div>
);

const StyledLoadingScreen = styled(LoadingScreen)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  font-weight: 600;
  font-size: 2.2rem;
  text-transform: uppercase;
  row-gap: 20px;
`;

export { StyledLoadingScreen };
