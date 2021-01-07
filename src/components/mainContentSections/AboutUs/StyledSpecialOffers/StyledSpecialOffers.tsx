import React from 'react';
import styled from 'styled-components';

import { StyledWrapper } from '../../../StyledWrapper';
import { StyledStandardSectionTitle } from '../../../StyledStandardSectionTitle';
import { StyledOffer } from './StyledOffer';
import { getSingleImage } from '../../../img';

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

const getOfferImg = (number: number, ext: 'jpg' | 'webp') => {
  return getSingleImage(`aboutUs/specialOffers/special-offer_${number}`, ext);
};

export interface Props {
  className?: string;
}

const SpecialOffers: React.FC<Props> = ({ className }) => (
  <section className={className}>
    <SpecialOffersWrapper>
      <StyledStandardSectionTitle rowOne="Special" rowTwo="Offers" />
      <StyledOffer
        offerTitle="Host your website"
        image={getOfferImg(1, 'jpg')}
        imageWebp={getOfferImg(1, 'webp')}
      />
      <StyledOffer
        offerTitle="Big offers for hosting"
        image={getOfferImg(2, 'jpg')}
        imageWebp={getOfferImg(2, 'webp')}
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
