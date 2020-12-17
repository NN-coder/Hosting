import React from 'react';

import MainContentSectionPromo from '../MainContentSectionPromo/MainContentSectionPromo';
import StyledHappyClients from './StyledHappyClients/StyledHappyClients';

const Service = () => (
  <section>
    <MainContentSectionPromo
      sectionName="service"
      titleRowOne="Our service"
      titleRowTwo="What we doing"
      bgPosition="center 40%"
    />
    <StyledHappyClients />
  </section>
);

export default Service;
