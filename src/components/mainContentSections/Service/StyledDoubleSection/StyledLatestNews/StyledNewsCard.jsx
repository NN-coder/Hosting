import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NewsCardDate = styled.div`
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

const NewsCard = ({ className, newsHeading, newsNumber, children: text }) => (
  <div className={className}>
    <NewsCardDate number={newsNumber}>Jan-05</NewsCardDate>
    <NewsCardInner>
      <NewsCardTitle>{newsHeading}</NewsCardTitle>
      <NewsCardText>{text}</NewsCardText>
    </NewsCardInner>
  </div>
);

NewsCard.propTypes = {
  className: PropTypes.string.isRequired,
  newsHeading: PropTypes.string.isRequired,
  newsNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

const StyledNewsCard = styled(NewsCard)`
  display: flex;
  margin-top: 30px;
  column-gap: 20px;
`;

export default StyledNewsCard;
