import React, { useEffect } from 'react';

import lozadObserver from '../../lozadObserver';
import MainContentSectionPromo from '../MainContentSectionPromo/MainContentSectionPromo';
import StyledSpecialOffers from './StyledSpecialOffers/StyledSpecialOffers';
import OurTeam from './OurTeam/OurTeam';

const AboutUs = () => {
  useEffect(() => {
    lozadObserver.observe();
  });

  return (
    <section>
      <MainContentSectionPromo
        sectionName="about-us"
        titleRowOne="About us"
        titleRowTwo="What we are"
        bgPosition="center 10%"
      />
      <StyledSpecialOffers />
      <OurTeam />
    </section>
  );
};

export default AboutUs;
