import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { LazyImage } from './utils/LazyImage';
import { getSingleImage } from './utils/img';

export interface Props {
  className?: string;
}

const Logo: React.FC<Props> = ({ className }) => (
  <h1 className={className}>
    <Link to="/">
      <LazyImage image={getSingleImage('logo', 'png')} />
      Hosting
    </Link>
  </h1>
);

const StyledLogo = styled(Logo)`
  a {
    display: flex;
    align-items: center;
    color: var(--header-elements-color);
    font-weight: 900;
    font-size: 2rem;
    letter-spacing: -0.005em;
    text-transform: uppercase;
    column-gap: 10px;
  }
`;

export { StyledLogo };
