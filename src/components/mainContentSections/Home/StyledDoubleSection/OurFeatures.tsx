import React from 'react';
import styled from 'styled-components';

import { StyledStandardSectionTitle } from '../../../StyledStandardSectionTitle';
import { StandardBtn } from '../../../StandardBtn';
import featuresListItemArrow from './features-list-item-arrow.svg';

const OurFeaturesInner = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 30px;
  column-gap: 40px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
  }
`;

const FeaturesList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(4, max-content);
  grid-template-columns: repeat(2, 240px);
  align-items: center;
  color: var(--text-color-primary);
  font-size: 1.35rem;
  letter-spacing: 0.01em;
  column-gap: 50px;
  row-gap: 15px;

  @media (max-width: 800px) {
    grid-auto-flow: row;
    grid-template-columns: 240px;
  }
`;
const FeaturesListItem = styled.li`
  position: relative;
  padding-left: 20px;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: url(${featuresListItemArrow});
  }
`;

const ViewAllBtn = styled(StandardBtn)`
  width: 165px;
  font-weight: 700;
  font-size: 1.35rem;
  letter-spacing: 0.1em;
`;

const OurFeatures: React.FC = () => (
  <section>
    <StyledStandardSectionTitle rowOne="Our" rowTwo="Features" />
    <OurFeaturesInner>
      <FeaturesList>
        <FeaturesListItem>Lorem ipsum dolor sit</FeaturesListItem>
        <FeaturesListItem>Consectetur adipisicing elit laboriosam</FeaturesListItem>
        <FeaturesListItem>Nam saepe quas harum</FeaturesListItem>
        <FeaturesListItem>Ratione laborum veniam tenetur</FeaturesListItem>
        <FeaturesListItem>Vitae sit voluptate molestias</FeaturesListItem>
        <FeaturesListItem>Provident asperiores recusandae eligendi</FeaturesListItem>
        <FeaturesListItem>Deleniti fugit autem quo</FeaturesListItem>
        <FeaturesListItem>Qui magnam veniam hic</FeaturesListItem>
      </FeaturesList>
      <ViewAllBtn>View all</ViewAllBtn>
    </OurFeaturesInner>
  </section>
);

export { OurFeatures };
