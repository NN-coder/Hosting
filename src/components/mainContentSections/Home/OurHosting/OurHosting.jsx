import React from 'react';
import styled from 'styled-components';

import StyledWrapper from '../../../StyledWrapper';
import StandardSectionTitle from '../../../StandardSectionTitle';
import StyledHostingPlanCard from './HostingPlanCard';

const OurHostingWrapper = styled(StyledWrapper)`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 30px;
  justify-content: center;
  padding: 100px 0 110px;

  @media (max-width: 1250px) {
    padding: 100px 20px 110px;
  }
`;

const advantages = [
  '10GB disk space',
  '1TB bandwidth',
  'Free DDoS protection',
  'Free daily buckaps',
  'Managed Hosting',
];

const OurHosting = () => (
  <section>
    <OurHostingWrapper>
      <StandardSectionTitle rowOne="Our" rowTwo="Hosting" />
      <StyledHostingPlanCard price="5" planName="Standard" advantages={advantages} />
      <StyledHostingPlanCard price="6" planName="Advanced" advantages={advantages} />
      <StyledHostingPlanCard price="8" planName="Business" advantages={advantages} />
      <StyledHostingPlanCard price="9" planName="Gold" advantages={advantages} />
    </OurHostingWrapper>
  </section>
);

export default OurHosting;
