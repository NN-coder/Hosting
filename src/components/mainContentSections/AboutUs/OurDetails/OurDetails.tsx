import React from 'react';
import styled from 'styled-components';

import { StyledStandardSectionTitle } from '../../../StyledStandardSectionTitle';
import { StyledWrapper } from '../../../StyledWrapper';
import { getSingleImage } from '../../../img';

// TODO: Add lazy loading
const OurDetailsImg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${getSingleImage('aboutUs/our-details', 'jpg')}) center no-repeat;
`;
const OurDetailsInner = styled.div`
  color: var(--text-color);
  font-size: 1.4rem;
  line-height: 2.4rem;
  letter-spacing: 0.01em;
`;
const OurDetailsQuote = styled.div`
  position: relative;
  margin-top: 45px;
  padding: 30px 40px;
  font-style: italic;
  border: 1px solid var(--border-color);
  &:before {
    position: absolute;
    top: 1px;
    left: 10px;
    color: var(--text-color-primary);
    font-size: 7rem;
    content: '“';
  }
`;

const OurDetailsWrapper = styled(StyledWrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding-top: 80px;
  padding-bottom: 110px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    ${OurDetailsImg} {
      height: 300px;
    }
  }
`;

const OurDetails: React.FC = () => (
  <section>
    <OurDetailsWrapper>
      <StyledStandardSectionTitle rowOne="Our" rowTwo="Details" />
      <OurDetailsImg />
      <OurDetailsInner>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <OurDetailsQuote>
          Started at 1980 Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry&apos;s standard dummy.
        </OurDetailsQuote>
      </OurDetailsInner>
    </OurDetailsWrapper>
  </section>
);

export { OurDetails };
