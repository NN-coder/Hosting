import React from 'react';

import MainContentSectionPromo from '../MainContentSectionPromo/MainContentSectionPromo';
import SupportCenter from './SupportCenter/SupportCenter';

const Support = () => (
  <section>
    <MainContentSectionPromo
      sectionName="support"
      titleRowOne="Support"
      titleRowTwo="Center"
      bgPosition="center 40%"
    />
    <SupportCenter />
  </section>
);

export default Support;
