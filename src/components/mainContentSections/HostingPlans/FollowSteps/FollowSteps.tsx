import React from 'react';
import styled from 'styled-components';

import { StyledWrapper } from '../../../StyledWrapper';
import { StyledStandardSectionTitle } from '../../../StyledStandardSectionTitle';
import { StyledStepCard } from './StyledStepCard';

const FollowStepsWrapper = styled(StyledWrapper)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 50px;
  padding: 80px 0 100px;

  @media (max-width: 1250px) {
    padding: 80px 20px 100px;
  }
  @media (max-width: 850px) {
    justify-items: center;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;

    ${StyledStepCard} {
      flex-direction: column;
      align-items: center;
      max-width: 500px;
      text-align: center;
    }
  }
`;

const FollowSteps: React.FC = () => (
  <section>
    <FollowStepsWrapper>
      <StyledStandardSectionTitle rowOne="Follow" rowTwo="Steps" />
      <StyledStepCard number={1} title="Choose your plan">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry&apos;s standard dummy text ever since.
      </StyledStepCard>
      <StyledStepCard number={2} title="Create your account">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry&apos;s standard dummy text ever since.
      </StyledStepCard>
      <StyledStepCard number={3} title="Launch your hosting">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry&apos;s standard dummy text ever since.
      </StyledStepCard>
    </FollowStepsWrapper>
  </section>
);

export { FollowSteps };
