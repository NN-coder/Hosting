import React from 'react';

import MainContentSectionPromo from '../MainContentSectionPromo/MainContentSectionPromo';
import StyledHappyClientsSlider from '../../StyledHappyClientsSlider/StyledHappyClientsSlider';

const Domain = () => (
  <section>
    <MainContentSectionPromo
      sectionName="domain"
      titleRowOne="Domain"
      titleRowTwo="Registration"
      bgPosition="center 80%"
    />
    <StyledHappyClientsSlider />
  </section>
);

export default Domain;
