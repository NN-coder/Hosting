import React, { useEffect } from 'react';

import lozadObserver from '../../lozadObserver';
import MainContentSectionPromo from '../MainContentSectionPromo/MainContentSectionPromo';

const Service = () => {
  useEffect(() => {
    lozadObserver.observe();
  });

  return (
    <section>
      <MainContentSectionPromo
        sectionName="service"
        titleRowOne="Our service"
        titleRowTwo="What we doing"
        bgPosition="center 40%"
      />
    </section>
  );
};

export default Service;
