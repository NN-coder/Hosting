import React from 'react';
import styled from 'styled-components';

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
  @media (max-width: 600px) {
    ${RowOne} {
      font-size: 3.5rem;
    }
    ${RowTwo} {
      font-size: 1.5rem;
    }
  }
`;

export interface Props {
  rowOne: string;
  rowTwo: string;
  bg: string;
  bgPosition: string;
  className?: string;
}

const Promo: React.FC<Props> = ({ className, rowOne, rowTwo, bg, bgPosition }) => (
  <div
    className={className}
    style={{ backgroundImage: `url(${bg})`, backgroundPosition: bgPosition }}
  >
    <PromoText>
      <RowOne>{rowOne}</RowOne>
      <RowTwo>{rowTwo}</RowTwo>
    </PromoText>
  </div>
);

const StyledPromo = styled(Promo)`
  position: relative;
  height: 260px;
  background-repeat: no-repeat;
`;

export { StyledPromo };
