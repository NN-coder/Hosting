import React from 'react';
import styled from 'styled-components';

import MainContentSectionPromo from '../MainContentSectionPromo/MainContentSectionPromo';
import OurHosting from '../Home/OurHosting/OurHosting';

const HostingPlansOurHosting = styled(OurHosting)`
  background-color: var(--blue);
`;

const HostingPlans: React.FC = () => (
  <section>
    <MainContentSectionPromo
      sectionName="hosting-plans"
      titleRowOne="Hosting"
      titleRowTwo="Plans"
      bgPosition="center 65%"
    />
    <HostingPlansOurHosting />
  </section>
);

export default HostingPlans;
