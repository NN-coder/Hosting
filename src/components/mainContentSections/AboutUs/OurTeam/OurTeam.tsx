import React from 'react';
import styled from 'styled-components';

import { workers } from './workers';
import { StyledWrapper } from '../../../StyledWrapper';
import { StyledStandardSectionTitle } from '../../../StyledStandardSectionTitle';
import { WorkerCard } from './WorkerCard';

const OurTeamWrapper = styled(StyledWrapper)`
  display: grid;
  grid-template-columns: repeat(auto-fit, 270px);
  justify-content: space-around;
  padding: 110px 0;
  column-gap: 30px;
  row-gap: 50px;

  @media (max-width: 1250px) {
    padding: 110px 20px;
  }
`;
const OurTeamTitle = styled(StyledStandardSectionTitle)`
  @media (max-width: 1000px) {
    justify-self: center;
  }
`;

const OurTeam: React.FC = () => (
  <section>
    <OurTeamWrapper>
      <OurTeamTitle rowOne="Meet" rowTwo="Our team" />
      {workers.map(({ id, name, position, photos, links }) => (
        <WorkerCard key={id} name={name} position={position} photos={photos} links={links} />
      ))}
    </OurTeamWrapper>
  </section>
);

export { OurTeam };
