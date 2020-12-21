import React from 'react';

import MainContentSectionPromo from '../MainContentSectionPromo/MainContentSectionPromo';
import StyledDoubleSection from './StyledDoubleSection/StyledDoubleSection';
import StyledHappyClientsSlider from '../../StyledHappyClientsSlider/StyledHappyClientsSlider';

const Service = () => (
  <section>
    <MainContentSectionPromo
      sectionName="service"
      titleRowOne="Our service"
      titleRowTwo="What we doing"
      bgPosition="center 40%"
    />
    <StyledDoubleSection />
    <StyledHappyClientsSlider />
  </section>
);

export default Service;
