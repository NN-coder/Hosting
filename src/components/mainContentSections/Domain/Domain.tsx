import React from 'react';

import MainContentSectionPromo from '../MainContentSectionPromo/MainContentSectionPromo';
import StyledNewDomains from './StyledNewDomains/StyledNewDomains';
import StyledHappyClientsSlider from '../../StyledHappyClientsSlider/StyledHappyClientsSlider';
import RegisterDomain from './RegisterDomain/RegisterDomain';

const Domain: React.FC = () => (
  <section>
    <MainContentSectionPromo
      sectionName="domain"
      titleRowOne="Domain"
      titleRowTwo="Registration"
      bgPosition="center 80%"
    />
    <RegisterDomain />
    <StyledNewDomains />
    <StyledHappyClientsSlider />
  </section>
);

export default Domain;
