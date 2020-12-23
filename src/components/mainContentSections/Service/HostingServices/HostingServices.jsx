import React from 'react';
import styled from 'styled-components';

import StyledWrapper from '../../../StyledWrapper';
import StyledStandardSectionTitle from '../../../StyledStandardSectionTitle';
import serviceCards from './serviceCards';

const HostingServicesWrapper = styled(StyledWrapper)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 55px;
  padding: 80px 0 100px;

  @media (max-width: 1250px) {
    padding: 80px 20px 100px;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  row-gap: 25px;

  @media (max-width: 700px) {
    align-items: center;
    text-align: center;
  }
`;
const ServiceCardTitle = styled.div`
  color: var(--text-color-primary);
  font-weight: 800;
  letter-spacing: 0.05em;
`;
const ServiceCardText = styled.p`
  max-width: 400px;
  color: var(--text-color);
  line-height: 24px;
  letter-spacing: 0.01em;
`;

const HostingServices = () => (
  <section>
    <HostingServicesWrapper>
      <StyledStandardSectionTitle rowOne="Hosting" rowTwo="Services" />
      {serviceCards.map(({ title, text, icon, id }) => (
        <ServiceCard key={id}>
          {icon}
          <ServiceCardTitle>{title}</ServiceCardTitle>
          <ServiceCardText>{text}</ServiceCardText>
        </ServiceCard>
      ))}
    </HostingServicesWrapper>
  </section>
);

export default HostingServices;