import React from 'react';
import styled from 'styled-components';

import { getSingleImage } from './utils/img';

const LoadingGif = styled.img`
  width: 100%;
  max-width: 350px;
  height: 250px;
`;

export interface Props {
  className?: string;
}

const LoadingScreen: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <LoadingGif src={getSingleImage('loading', 'gif')} alt="Loading" />
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
