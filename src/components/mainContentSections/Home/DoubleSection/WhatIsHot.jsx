import React from 'react';
import styled from 'styled-components';

import StyledStandardSectionTitle from '../../../StyledStandardSectionTitle';

const Coupon = styled.div`
  max-width: 380px;
  margin-top: 30px;
  border: 10px solid white;
`;
const CouponInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  padding: 15px;
  font-weight: 800;
  text-transform: uppercase;
  column-gap: 10px;
  background-color: white;
  border: 2px solid var(--section-bg-orange);

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`;

const GetUpTo = styled.div`
  min-width: 100%;
  color: #97947f;
  font-size: 1.4rem;
  letter-spacing: -0.025em;

  @media (max-width: 450px) {
    min-width: auto;
  }
`;
const FiftyPercentsOff = styled.div`
  color: var(--accent-color);
  font-size: 4.8rem;
  letter-spacing: 0.025em;
  *:last-child {
    margin-left: 10px;
    color: var(--accent-color-active);
  }
`;
const EachHosting = styled.div`
  position: relative;
  bottom: 5px;
  color: var(--text-color-primary);
  font-size: 1.7rem;
  letter-spacing: 0.025em;

  @media (max-width: 450px) {
    margin-top: 5px;
    text-align: center;
  }
`;
const Each = styled.div`
  color: var(--text-color);
  font-weight: 300;
`;

const WhatIsHot = () => (
  <section>
    <StyledStandardSectionTitle rowOne="Now" rowTwo="What is hot" />
    <Coupon>
      <CouponInner>
        <GetUpTo>Get up to</GetUpTo>
        <FiftyPercentsOff>
          <span>50%</span>
          <span>Off</span>
        </FiftyPercentsOff>
        <EachHosting>
          <Each>Each</Each>
          Hosting
        </EachHosting>
      </CouponInner>
    </Coupon>
  </section>
);

export default WhatIsHot;
