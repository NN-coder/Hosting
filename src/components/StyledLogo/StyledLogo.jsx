import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LazyImage from '../LazyImage';
import logo from './logo.png';

const Logo = ({ className }) => (
  <h1 className={className}>
    <a href="/">
      <LazyImage image={logo} alt="" />
      Hosting
    </a>
  </h1>
);

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledLogo = styled(Logo)`
  a {
    display: flex;
    align-items: center;
    margin-left: 20px;
    color: var(--header-elements-color);
    font-weight: 900;
    font-size: 2rem;
    letter-spacing: -0.005em;
    text-transform: uppercase;
    column-gap: 10px;
  }
`;

export default StyledLogo;
