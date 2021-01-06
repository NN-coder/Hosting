import React from 'react';

import { MainContentSectionPromo } from '../MainContentSectionPromo/MainContentSectionPromo';
import { OurDetails } from './OurDetails/OurDetails';
import { StyledSpecialOffers } from './StyledSpecialOffers/StyledSpecialOffers';
import { OurTeam } from './OurTeam/OurTeam';

const AboutUs: React.FC = () => (
  <section>
    <MainContentSectionPromo
      sectionName="about-us"
      titleRowOne="About us"
      titleRowTwo="What we are"
      bgPosition="center 10%"
    />
    <OurDetails />
    <StyledSpecialOffers />
    <OurTeam />
  </section>
);

export default AboutUs;
