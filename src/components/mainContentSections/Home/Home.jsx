import React, { useEffect } from 'react';

import obsrever from '../../lozadObserver';
import StyledHomeSlider from './HomeSlider/HomeSlider';
import StyledSearchDomain from './StyledSearchDomain/StyledSearchDomain';
import OurBenefits from './OurBenefits/OurBenefits';

const Home = () => {
  useEffect(() => {
    obsrever.observe();
  });

  return (
    <div className="main-content-section">
      <StyledHomeSlider />
      <StyledSearchDomain />
      <OurBenefits />
    </div>
  );
};

export default Home;
