import React, { useEffect } from 'react';

import lozadObsrever from '../../lozadObserver';
import MainContentSectionPromo from '../MainContentSectionPromo/MainContentSectionPromo';

const AboutUs = () => {
  useEffect(() => {
    lozadObsrever.observe();
  });

  return (
    <section>
      <MainContentSectionPromo
        sectionName="about-us"
        titleRowOne="About us"
        titleRowTwo="What we are"
      />
    </section>
  );
};

export default AboutUs;
