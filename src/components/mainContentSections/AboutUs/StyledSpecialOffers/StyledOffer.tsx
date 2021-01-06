import React, { useMemo } from 'react';
import styled from 'styled-components';
import shortid from 'shortid';

import { LazyImage } from '../../../LazyImage';
import { StandardBtn } from '../../../StandardBtn';
import listArrow from './img/list-arrow.svg';

const OfferImg = styled(LazyImage)`
  width: 260px;
`;

const OfferInner = styled.div`
  color: var(--text-color);
  font-size: 1.4rem;
  letter-spacing: 0.01em;

  @media (max-width: 650px) {
    display: contents;
  }
`;
const OfferTitle = styled.div`
  color: var(--text-color-primary);
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;
const OfferText = styled.p`
  margin-top: 20px;
  line-height: 24px;
`;

const OfferList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 25px;
`;
const OfferListItem = styled.li`
  position: relative;
  padding-left: 20px;
  &:before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    content: url(${listArrow});
  }
`;

const OfferBtn = styled(StandardBtn)`
  width: 165px;
  margin-top: 30px;
  font-weight: 700;
  font-size: inherit;
  letter-spacing: 0.1em;
`;

const offerAdvantages = [
  'Lorem Ipsum is simply dummy',
  'Discovered the undoubted',
  'Various versions have evolved',
  'Glory to the Soviet Union!',
];

export interface Props {
  offerTitle: string;
  image: string;
  imageWebp?: string;
  className?: string;
}

const Offer: React.FC<Props> = ({ className, offerTitle, image, imageWebp }) => {
  const offerListItems = useMemo(
    () => offerAdvantages.map((text) => ({ key: shortid.generate(), text })),
    []
  );

  return (
    <div className={className}>
      <OfferImg image={image} imageWebp={imageWebp} />
      <OfferInner>
        <OfferTitle>{offerTitle}</OfferTitle>
        <OfferText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been.
        </OfferText>
        <OfferList>
          {offerListItems.map(({ key, text }) => (
            <OfferListItem key={key}>{text}</OfferListItem>
          ))}
        </OfferList>
        <OfferBtn>Host today</OfferBtn>
      </OfferInner>
    </div>
  );
};

const StyledOffer = styled(Offer)`
  display: flex;
  gap: 30px;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    ${OfferText} {
      text-align: center;
    }
  }
`;

export { StyledOffer };
