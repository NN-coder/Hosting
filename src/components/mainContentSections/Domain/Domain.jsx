import React from 'react';

import MainContentSectionPromo from '../MainContentSectionPromo/MainContentSectionPromo';
import StyledNewDomains from './StyledNewDomains/StyledNewDomains';
import StyledHappyClientsSlider from '../../StyledHappyClientsSlider/StyledHappyClientsSlider';

const Domain = () => (
  <section>
    <MainContentSectionPromo
      sectionName="domain"
      titleRowOne="Domain"
      titleRowTwo="Registration"
      bgPosition="center 80%"
    />
    <StyledNewDomains />
    <StyledHappyClientsSlider />
  </section>
);

export default Domain;
