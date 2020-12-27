import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import shortid from 'shortid';

import StandardBtn from '../../../StandardBtn';

const HostingPlanPrice = styled.div`
  color: var(--text-color-primary);
  text-transform: uppercase;
`;

const HostingPlanPriceNumber = styled.div`
  font-weight: 800;
  font-size: 5rem;
  text-align: center;
  &:before {
    margin-right: 3px;
    font-weight: 300;
    content: '$';
  }
`;
const HostingPlanPricePeriod = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 0.1em;
`;

const HostingPlanAdvantages = styled.ul`
  width: 100%;
  margin-top: 20px;
  color: var(--text-color);
  font-size: 1.4rem;
`;
const HostingPlanAdvantagesItem = styled.li`
  padding: 10px 0;
  text-align: center;
  border-top: 1px solid #e1eff4;
  &:first-child {
    padding-top: 0;
    border: none;
  }
  &:last-child {
    padding-bottom: 0;
  }
`;

const HostingPlanCardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 40px;
  color: white;
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background-color: var(--accent-color-active);
`;
const SignUpBtn = styled(StandardBtn)`
  width: 115px;
  height: 45px;
  font-weight: 700;
  font-size: 1.3rem;
`;

const HostingPlanCard = ({ className, price, planName, advantages }) => {
  const advantagesOptions = useMemo(
    () => advantages.slice(0, 5).map((text) => ({ text, key: shortid.generate() })),
    [advantages]
  );

  return (
    <div className={className}>
      <HostingPlanPrice>
        <HostingPlanPriceNumber>{price}</HostingPlanPriceNumber>
        <HostingPlanPricePeriod>Per month</HostingPlanPricePeriod>
      </HostingPlanPrice>
      <HostingPlanCardTitle>{`${planName} plan`}</HostingPlanCardTitle>
      <HostingPlanAdvantages>
        {advantagesOptions.map(({ text, key }) => (
          <HostingPlanAdvantagesItem key={key}>{text}</HostingPlanAdvantagesItem>
        ))}
      </HostingPlanAdvantages>
      <SignUpBtn>Sign up</SignUpBtn>
    </div>
  );
};

HostingPlanCard.propTypes = {
  className: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  planName: PropTypes.string.isRequired,
  advantages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const StyledHostingPlanCard = styled(HostingPlanCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px 25px;
  background-color: white;
  border: 1px solid #e1eff4;
  row-gap: 30px;
`;

export default StyledHostingPlanCard;
