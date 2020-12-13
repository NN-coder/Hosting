import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PromoText = styled.h2`
  position: absolute;
  top: 50%;
  left: calc((100% - 1200px) / 2);
  color: white;
  white-space: nowrap;
  text-transform: uppercase;
  transform: translateY(-50%);

  @media (max-width: 1250px) {
    left: calc((100% - 1160px) / 2);
  }
  @media (max-width: 1200px) {
    left: 20px;
  }
  @media (max-width: 1000px) {
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;
const RowOne = styled.div`
  font-weight: 800;
  font-size: 4rem;
  letter-spacing: 0.025em;
`;
const RowTwo = styled.div`
  font-weight: 300;
  font-size: 2rem;
  letter-spacing: 0.1em;
`;

const Promo = ({ className, rowOne, rowTwo, bg }) => (
  <div className={`lozad ${className}`} data-background-image={bg}>
    <PromoText>
      <RowOne>{rowOne}</RowOne>
      <RowTwo>{rowTwo}</RowTwo>
    </PromoText>
  </div>
);

Promo.propTypes = {
  className: PropTypes.string.isRequired,
  rowOne: PropTypes.string.isRequired,
  rowTwo: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};

const StyledPromo = styled(Promo)`
  position: relative;
  height: 260px;
  background-repeat: no-repeat;
  background-position: ${(props) => props.bgPosition};
`;

export default StyledPromo;
