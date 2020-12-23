import React from 'react';

import MainContentSectionPromo from '../MainContentSectionPromo/MainContentSectionPromo';
import HostingServices from './HostingServices/HostingServices';
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
    <HostingServices />
    <StyledDoubleSection />
    <StyledHappyClientsSlider />
  </section>
);

export default Service;
