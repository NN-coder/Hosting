import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LazyImage from '../../../LazyImage';
import quotes from './img/quotes.svg';

const CommentText = styled.p`
  color: var(--text-color);
  line-height: 24px;
  letter-spacing: 0.01em;
`;

const CommentFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  text-transform: uppercase;
  column-gap: 15px;
`;
const CommentAuthorImage = styled(LazyImage)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
const CommentAuthorName = styled.div`
  color: var(--text-color-primary);
  font-weight: 800;
  letter-spacing: 0.05em;
  &:before {
    display: block;
    font-weight: 400;
    content: 'By';
  }
`;

const Comment = ({ className, name, image, imageWebp, children: text }) => (
  <div className={className}>
    <CommentText>{text}</CommentText>
    <CommentFooter>
      <CommentAuthorImage image={image} imageWebp={imageWebp} alt={name} />
      <CommentAuthorName>{name}</CommentAuthorName>
    </CommentFooter>
  </div>
);

Comment.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string,
  image: PropTypes.string.isRequired,
  imageWebp: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
Comment.defaultProps = {
  name: 'Anonymous',
  imageWebp: '',
};

const StyledComment = styled(Comment)`
  position: relative;
  padding: 60px 35px;
  font-size: 1.4rem;
  border: solid 1px #d3e5eb;
  &:before {
    position: absolute;
    top: -25px;
    left: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: white;
    border: solid 1px #d3e5eb;
    content: url(${quotes});
  }
`;

export default StyledComment;
