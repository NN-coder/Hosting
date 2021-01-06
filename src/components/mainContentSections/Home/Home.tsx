import React from 'react';

import { StyledHomeSlider } from './StyledHomeSlider/StyledHomeSlider';
import { StyledSearchDomain } from './StyledSearchDomain/StyledSearchDomain';
import { OurBenefits } from './OurBenefits/OurBenefits';
import { StyledDoubleSection } from './StyledDoubleSection/StyledDoubleSection';
import { OurHosting } from './OurHosting/OurHosting';

const Home: React.FC = () => (
  <section>
    <StyledHomeSlider />
    <StyledSearchDomain />
    <OurBenefits />
    <StyledDoubleSection />
    <OurHosting />
  </section>
);

export default Home;
