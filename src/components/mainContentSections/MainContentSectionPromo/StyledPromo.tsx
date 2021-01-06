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
  bgPosition: string;
  className?: string;
}

const Promo: React.FC<Props> = ({ className, rowOne, rowTwo, bgPosition }) => (
  <div className={className} style={{ backgroundPosition: bgPosition }}>
    <PromoText>
      <RowOne>{rowOne}</RowOne>
      <RowTwo>{rowTwo}</RowTwo>
    </PromoText>
  </div>
);

export interface Backgrounds {
  '540x960': string;
  '720x1280': string;
  '1280x720': string;
  '1600x900': string;
  '2048x1152': string;
}

const StyledPromo = styled(Promo)<{ backgrounds: Backgrounds }>`
  position: relative;
  height: 260px;
  background-repeat: no-repeat;

  @media (min-width: 1600.1px) {
    background-image: url(${({ backgrounds }) => backgrounds['2048x1152']});
  }
  @media (min-width: 1250.1px) and (max-width: 1600px) {
    background-image: url(${({ backgrounds }) => backgrounds['1600x900']});
  }
  @media (min-width: 700.1px) and (max-width: 1250px) {
    background-image: url(${({ backgrounds }) => backgrounds['1280x720']});
  }
  @media (min-width: 500.1px) and (max-width: 700px) {
    background-image: url(${({ backgrounds }) => backgrounds['720x1280']});
  }
  @media (max-width: 500px) {
    background-image: url(${({ backgrounds }) => backgrounds['540x960']});
  }
`;

export { StyledPromo };
