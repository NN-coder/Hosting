import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import loadingGif from './loading.gif';

const LoadingScreen = ({ className }) => {
  return (
    <div className={className}>
      <img src={loadingGif} alt="Loading" width="350px" height="250px" />
      Loading...
    </div>
  );
};

LoadingScreen.propTypes = {
  className: PropTypes.string.isRequired,
};

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

export default StyledLoadingScreen;
