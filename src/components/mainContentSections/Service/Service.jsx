import React from 'react';

import MainContentSectionPromo from '../MainContentSectionPromo/MainContentSectionPromo';
import StyledHappyClientsSlider from '../../StyledHappyClientsSlider/StyledHappyClientsSlider';

const Service = () => (
  <section>
    <MainContentSectionPromo
      sectionName="service"
      titleRowOne="Our service"
      titleRowTwo="What we doing"
      bgPosition="center 40%"
    />
    <StyledHappyClientsSlider />
  </section>
);

export default Service;
