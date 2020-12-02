import React from 'react';
import styled from 'styled-components';
import benefitCards from './benefitCards';

import StyledWrapper from '../../../StyledWrapper';
import StandrardSectionTitle from '../../../StandardSectionTitle';

//* ================================================== Styles ==================================================
const OurBenefitsWrapper = styled(StyledWrapper)`
  padding: 85px 0 110px;

  @media screen and (max-width: 1250px) {
    padding: 85px 20px 110px;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const OurBenefitsInner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 35px;
  column-gap: 40px;
  row-gap: 60px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  display: flex;
  column-gap: 25px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const BenefitCardInner = styled.div`
  @media (max-width: 700px) {
    display: contents;
  }
`;
const BenefitCardTitle = styled.div`
  margin: 8px 0 10px;
  color: #556b72;
  font-weight: 800;
  font-size: 1.6rem;
  letter-spacing: 0.025em;
  text-transform: uppercase;
`;
const BenefitCardText = styled.div`
  max-width: 400px;
  color: #a0a9b6;
  font-size: 1.35rem;
  line-height: 24px;
  letter-spacing: 0.01em;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

//* ================================================== Code ==================================================
const OurBenefits = () => (
  <div>
    <OurBenefitsWrapper>
      <StandrardSectionTitle rowOne="Our" rowTwo="Benefits" />
      <OurBenefitsInner>
        {benefitCards.map(({ img, title, text, id }) => (
          <BenefitCard key={id}>
            {img}
            <BenefitCardInner>
              <BenefitCardTitle>{title}</BenefitCardTitle>
              <BenefitCardText>{text}</BenefitCardText>
            </BenefitCardInner>
          </BenefitCard>
        ))}
      </OurBenefitsInner>
    </OurBenefitsWrapper>
  </div>
);

export default OurBenefits;
