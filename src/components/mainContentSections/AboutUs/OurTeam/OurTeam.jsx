import React from 'react';
import styled from 'styled-components';

import workers from './workers';
import StyledWrapper from '../../../StyledWrapper';
import StyledStandardSectionTitle from '../../../StyledStandardSectionTitle';
import WorkerCard from './WorkerCard';

const OurTeamWrapper = styled(StyledWrapper)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 110px 0;
  column-gap: 30px;
  row-gap: 50px;

  @media (max-width: 1250px) {
    padding: 110px 20px;
  }
`;

const OurTeam = () => (
  <section>
    <OurTeamWrapper>
      <StyledStandardSectionTitle rowOne="Meet" rowTwo="Our team" />
      {workers.map(({ id, name, position, photo, links }) => (
        <WorkerCard key={id} name={name} position={position} photo={photo} links={links} />
      ))}
    </OurTeamWrapper>
  </section>
);

export default OurTeam;
