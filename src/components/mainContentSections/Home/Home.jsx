import React, { useEffect } from 'react';

import lozadObserver from '../../lozadObserver';
import StyledHomeSlider from './StyledHomeSlider/StyledHomeSlider';
import StyledSearchDomain from './StyledSearchDomain/StyledSearchDomain';
import OurBenefits from './OurBenefits/OurBenefits';
import DoubleSection from './DoubleSection/DoubleSection';
import OurHosting from './OurHosting/OurHosting';

const Home = () => {
  useEffect(() => {
    lozadObserver.observe();
  });

  return (
    <section>
      <StyledHomeSlider />
      <StyledSearchDomain />
      <OurBenefits />
      <DoubleSection />
      <OurHosting />
    </section>
  );
};

export default Home;
