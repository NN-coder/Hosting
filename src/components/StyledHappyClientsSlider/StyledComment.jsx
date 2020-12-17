import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LazyImage from '../LazyImage';

const CommentPhoto = styled(LazyImage)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
const CommentInner = styled.div`
  font-size: 1.4rem;
`;
const CommentText = styled.p`
  color: var(--text-color);
  font-style: italic;
  line-height: 24px;
  letter-spacing: 0.01em;
`;
const CommentAuthor = styled.div`
  margin-top: 20px;
  color: var(--text-color-primary);
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  &:before {
    display: block;
    font-weight: 400;
    content: 'By';
  }
`;

function cropText(str) {
  return str.length > 380 ? `${str.slice(0, 378)}...` : str;
}

const Comment = ({ className, children, photo, name }) => {
  const text = cropText(children);

  // TODO: Figure out why all images are loaded at the same time
  return (
    <div className={className}>
      <CommentPhoto image={photo.jpg} imageWebp={photo.webp} alt={name} />
      <CommentInner>
        <CommentText>{text}</CommentText>
        <CommentAuthor>{name}</CommentAuthor>
      </CommentInner>
    </div>
  );
};

Comment.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.shape({
    webp: PropTypes.string,
    jpg: PropTypes.string,
    png: PropTypes.string,
  }).isRequired,
};

const StyledComment = styled(Comment)`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    ${CommentText},
    ${CommentAuthor} {
      text-align: center;
    }
    ${CommentPhoto} {
      margin-top: 40px;
    }
  }
`;

export default StyledComment;
