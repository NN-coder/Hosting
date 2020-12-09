import React, { useEffect } from 'react';

import lozadObsrever from '../../lozadObserver';
import StyledHomeSlider from './HomeSlider/HomeSlider';
import StyledSearchDomain from './StyledSearchDomain/StyledSearchDomain';
import OurBenefits from './OurBenefits/OurBenefits';
import DoubleSection from './DoubleSection/DoubleSection';
import OurHosting from './OurHosting/OurHosting';

const Home = () => {
  useEffect(() => {
    lozadObsrever.observe();
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
