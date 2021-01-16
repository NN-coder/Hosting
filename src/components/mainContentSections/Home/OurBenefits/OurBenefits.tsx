import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';

import { StyledWrapper } from '../../../StyledWrapper';
import { StyledStandardSectionTitle } from '../../../StyledStandardSectionTitle';
import { benefitCards } from './benefitCards';

const OurBenefitsWrapper = styled(StyledWrapper)`
  padding-top: 85px;
  padding-bottom: 110px;

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
  color: var(--text-color-primary);
  font-weight: 800;
  font-size: 1.6rem;
  letter-spacing: 0.025em;
  text-transform: uppercase;
`;
const BenefitCardText = styled.p`
  max-width: 400px;
  color: var(--text-color);
  font-size: 1.35rem;
  line-height: 24px;
  letter-spacing: 0.01em;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

const contextValue = {
  size: '60px',
  color: 'var(--accent-color)',
  attr: { 'aria-hidden': true },
  style: { minWidth: '60px' },
};

const OurBenefits: React.FC = () => (
  <section>
    <OurBenefitsWrapper>
      <StyledStandardSectionTitle rowOne="Our" rowTwo="Benefits" />
      <IconContext.Provider value={contextValue}>
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
      </IconContext.Provider>
    </OurBenefitsWrapper>
  </section>
);

export { OurBenefits };
