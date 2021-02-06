import React from 'react';
import styled from 'styled-components/macro';

import { StyledWrapper } from '../../../StyledWrapper';
import { StyledStandardSectionTitle } from '../../../StyledStandardSectionTitle';
import { StyledHostingPlanCard } from './StyledHostingPlanCard';

const OurHostingWrapper = styled(StyledWrapper)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 40px;
  padding-top: 100px;
  padding-bottom: 110px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(auto-fit, 250px);
    justify-content: center;
  }
`;
const OurHostingTitle = styled(StyledStandardSectionTitle)`
  @media (max-width: 850px) {
    justify-self: center;
  }
`;

const advantages = [
  '10GB disk space',
  '1TB bandwidth',
  'Free DDoS protection',
  'Free daily backups',
  'Managed Hosting',
];

export interface Props {
  className?: string;
}

const OurHosting: React.FC<Props> = ({ className }) => (
  <section className={className}>
    <OurHostingWrapper>
      <OurHostingTitle rowOne="Our" rowTwo="Hosting" />
      <StyledHostingPlanCard price="5" planName="Standard" advantages={advantages} />
      <StyledHostingPlanCard price="6" planName="Advanced" advantages={advantages} />
      <StyledHostingPlanCard price="8" planName="Business" advantages={advantages} />
      <StyledHostingPlanCard price="9" planName="Gold" advantages={advantages} />
    </OurHostingWrapper>
  </section>
);

export { OurHosting };
