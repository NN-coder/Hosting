import React from 'react';
import styled from 'styled-components';

import StyledWrapper from '../../../StyledWrapper';
import StyledFeaturedService from './StyledFeaturedService/StyledFeaturedService';
import StyledLatestNews from './StyledLatestNews/StyledLatestNews';

const DoubleSectionWrapper = styled(StyledWrapper)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  font-size: 1.4rem;
  letter-spacing: 0.05em;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    ${StyledLatestNews} {
      margin-top: 80px;
      padding: 0;
    }
    ${StyledFeaturedService} {
      padding: 0;
    }
  }
`;

export interface Props {
  className?: string;
}

const DoubleSection: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <DoubleSectionWrapper>
      <StyledFeaturedService />
      <StyledLatestNews />
    </DoubleSectionWrapper>
  </div>
);

const StyledDoubleSection = styled(DoubleSection)`
  padding: 120px 0;
  background-color: var(--blue);

  @media (max-width: 1250px) {
    padding: 120px 20px;
  }
`;

export default StyledDoubleSection;
