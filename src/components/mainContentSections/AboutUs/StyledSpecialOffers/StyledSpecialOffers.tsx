import React from 'react';
import styled from 'styled-components';

import { StyledWrapper } from '../../../StyledWrapper';
import { StyledStandardSectionTitle } from '../../../StyledStandardSectionTitle';
import { StyledOffer } from './StyledOffer';

const SpecialOffersWrapper = styled(StyledWrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 40px;
  column-gap: 50px;

  @media (max-width: 1150px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const images = require.context('./img');
const getImagePath = (name: string): string => images(name).default;

export interface Props {
  className?: string;
}

const SpecialOffers: React.FC<Props> = ({ className }) => (
  <section className={className}>
    <SpecialOffersWrapper>
      <StyledStandardSectionTitle rowOne="Special" rowTwo="Offers" />
      <StyledOffer
        offerTitle="Host your website"
        image={getImagePath('./special-offer_1.jpg')}
        imageWebp={getImagePath('./special-offer_1.webp')}
      />
      <StyledOffer
        offerTitle="Big offers for hosting"
        image={getImagePath('./special-offer_2.jpg')}
        imageWebp={getImagePath('./special-offer_2.webp')}
      />
    </SpecialOffersWrapper>
  </section>
);

const StyledSpecialOffers = styled(SpecialOffers)`
  padding: 100px 0 120px;
  background-color: var(--blue);

  @media (max-width: 1250px) {
    padding: 100px 20px 120px;
  }
`;

export { StyledSpecialOffers };
