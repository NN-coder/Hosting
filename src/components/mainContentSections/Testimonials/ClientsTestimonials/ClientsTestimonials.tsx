import React, { useState } from 'react';
import styled from 'styled-components/macro';
import MediaQuery from 'react-responsive';

import { Masonry } from '../../../utils/Masonry';
import { StandardBtn } from '../../../StandardBtn';
import { StyledWrapper } from '../../../StyledWrapper';
import { StyledStandardSectionTitle } from '../../../StyledStandardSectionTitle';
import { StyledComment } from './StyledComment';
import { comments, Comment } from './comments';

const ClientsTestimonialsWrapper = styled(StyledWrapper)`
  padding-top: 80px;
`;
const ClientsTestimonialsInner = styled(Masonry).attrs({
  columnGap: 30,
  rowGap: 50,
})`
  margin-top: 70px;
`;
const ShowMoreBtn = styled(StandardBtn)`
  position: relative;
  left: calc(50% - 85px);
  width: 170px;
  margin-top: 40px;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.1em;
`;

const getInitialColumnsCount = () => {
  const { matchMedia } = window;
  if (matchMedia('(min-width:1000.1px)').matches) return 3;
  if (matchMedia('(min-width:700.1px)').matches) return 2;
  return 1;
};

const renderComment = ({ author, comment, id, images: { jpg, webp } }: Comment) => (
  <StyledComment key={id} name={author} image={jpg} imageWebp={webp}>
    {comment}
  </StyledComment>
);

// TODO: Add lazy loading for comments
const ClientsTestimonials: React.FC = () => {
  const [commentsToShow, showComments] = useState(getInitialColumnsCount() * 3);

  return (
    <section>
      <ClientsTestimonialsWrapper>
        <StyledStandardSectionTitle rowOne="Clients" rowTwo="Testimonials" />

        <MediaQuery
          minDeviceWidth={1000.1}
          onChange={() => (commentsToShow < 9 ? showComments(9) : null)}
        >
          <ClientsTestimonialsInner columnsCount={3}>
            {comments.slice(0, commentsToShow).map(renderComment)}
          </ClientsTestimonialsInner>
        </MediaQuery>

        <MediaQuery
          minDeviceWidth={700.1}
          maxDeviceWidth={1000}
          onChange={() => (commentsToShow < 6 ? showComments(6) : null)}
        >
          <ClientsTestimonialsInner columnsCount={2}>
            {comments.slice(0, commentsToShow).map(renderComment)}
          </ClientsTestimonialsInner>
        </MediaQuery>

        <MediaQuery
          maxDeviceWidth={700}
          onChange={() => (commentsToShow < 3 ? showComments(3) : null)}
        >
          <ClientsTestimonialsInner columnsCount={1}>
            {comments.slice(0, commentsToShow).map(renderComment)}
          </ClientsTestimonialsInner>
        </MediaQuery>

        {commentsToShow < comments.length && (
          <ShowMoreBtn onClick={() => showComments((prevVal) => prevVal + 3)}>
            Show more
          </ShowMoreBtn>
        )}
      </ClientsTestimonialsWrapper>
    </section>
  );
};

export { ClientsTestimonials };
