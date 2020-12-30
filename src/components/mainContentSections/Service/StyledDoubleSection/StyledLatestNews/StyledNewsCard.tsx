import React from 'react';
import styled from 'styled-components';

const NewsCardDate = styled.div<{ number: string | number }>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  color: white;
  text-transform: uppercase;
  background-color: var(--accent-color);
  border-radius: 50%;
  row-gap: 3px;
  &:before {
    font-weight: 800;
    content: '${({ number }) => number}';
  }
`;

const NewsCardInner = styled.div``;
const NewsCardTitle = styled.div`
  margin: 20px 0;
  color: var(--text-color-primary);
  font-weight: 800;
`;
const NewsCardText = styled.p`
  color: var(--text-color);
  line-height: 24px;
`;

export interface Props {
  newsHeading: string;
  newsNumber: string | number;
  children: string;
  className?: string;
}

const NewsCard: React.FC<Props> = ({ className, newsHeading, newsNumber, children: text }) => (
  <div className={className}>
    <NewsCardDate number={newsNumber}>Jan-05</NewsCardDate>
    <NewsCardInner>
      <NewsCardTitle>{newsHeading}</NewsCardTitle>
      <NewsCardText>{text}</NewsCardText>
    </NewsCardInner>
  </div>
);

const StyledNewsCard = styled(NewsCard)`
  display: flex;
  margin-top: 30px;
  column-gap: 20px;
`;

export default StyledNewsCard;
