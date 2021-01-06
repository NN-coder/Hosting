import React from 'react';
import styled from 'styled-components';

import { StyledWrapper } from '../../../StyledWrapper';
import { WhatIsHot } from './WhatIsHot';
import { OurFeatures } from './OurFeatures';

const DoubleSectionWrapper = styled(StyledWrapper)`
  display: grid;
  grid-template-columns: 1.2fr 1.8fr;
  column-gap: 50px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 50px;
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export interface Props {
  className?: string;
}

const DoubleSection: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <DoubleSectionWrapper>
      <WhatIsHot />
      <OurFeatures />
    </DoubleSectionWrapper>
  </div>
);

const StyledDoubleSection = styled(DoubleSection)`
  padding: 95px 0 120px;
  background-color: var(--section-bg-orange);

  @media (max-width: 1250px) {
    padding: 95px 20px 120px;
  }
`;

export { StyledDoubleSection };
