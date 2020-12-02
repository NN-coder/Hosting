import React, { useEffect } from 'react';

import obsrever from '../../lozadObserver';
import StyledHomeSlider from './HomeSlider/HomeSlider';
import StyledSearchDomain from './StyledSearchDomain/StyledSearchDomain';

const Home = () => {
  useEffect(() => {
    obsrever.observe();
  });

  return (
    <div className="main-content-section">
      <StyledHomeSlider />
      <StyledSearchDomain />
    </div>
  );
};

export default Home;
