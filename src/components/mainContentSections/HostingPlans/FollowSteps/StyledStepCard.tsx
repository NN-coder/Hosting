import React from 'react';
import styled from 'styled-components/macro';

const StepCardNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  height: 60px;
  color: white;
  font-weight: 800;
  font-size: 3rem;
  background-color: var(--accent-color);
`;
const StepCardInner = styled.div`
  font-size: 1.4rem;
`;
const StepCardTitle = styled.div`
  margin: 15px 0;
  color: var(--text-color-primary);
  font-weight: 800;
  letter-spacing: 0.05em;
`;
const StepCardText = styled.p`
  color: var(--text-color);
  line-height: 24px;
  letter-spacing: 0.01em;
`;

export interface Props {
  number: string | number;
  title: string;
  children: string;
  className?: string;
}

const StepCard: React.FC<Props> = ({ number, title, children: text, className }) => (
  <div className={className}>
    <StepCardNumber>{number}</StepCardNumber>
    <StepCardInner>
      <StepCardTitle>{title}</StepCardTitle>
      <StepCardText>{text}</StepCardText>
    </StepCardInner>
  </div>
);

const StyledStepCard = styled(StepCard)`
  display: flex;
  column-gap: 30px;
`;

export { StyledStepCard };
