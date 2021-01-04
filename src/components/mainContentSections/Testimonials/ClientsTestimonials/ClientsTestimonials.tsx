import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import Masonry from '../../../Masonry';
import StyledWrapper from '../../../StyledWrapper';
import StyledStandardSectionTitle from '../../../StyledStandardSectionTitle';
import StyledComment from './StyledComment';
import comments, { Comment } from './comments';

const ClientsTestimonialsWrapper = styled(StyledWrapper)`
  padding: 80px 0;

  @media (max-width: 1250px) {
    padding: 80px 20px;
  }
`;
const ClientsTestimonialsInner = styled(Masonry).attrs({
  columnGap: 30,
  rowGap: 50,
})`
  margin-top: 70px;
`;

const renderComment = ({ author, comment, id, images: { jpg, webp } }: Comment) => (
  <StyledComment key={id} name={author} image={jpg} imageWebp={webp}>
    {comment}
  </StyledComment>
);

const ClientsTestimonials: React.FC = () => (
  <section>
    <ClientsTestimonialsWrapper>
      <StyledStandardSectionTitle rowOne="Clients" rowTwo="Testimonials" />

      <MediaQuery minDeviceWidth={1000.1}>
        <ClientsTestimonialsInner columnsCount={3}>
          {comments.slice(0, 9).map(renderComment)}
        </ClientsTestimonialsInner>
      </MediaQuery>

      <MediaQuery minDeviceWidth={700.1} maxDeviceWidth={1000}>
        <ClientsTestimonialsInner columnsCount={2}>
          {comments.slice(0, 6).map(renderComment)}
        </ClientsTestimonialsInner>
      </MediaQuery>

      <MediaQuery maxDeviceWidth={700}>
        <ClientsTestimonialsInner columnsCount={1}>
          {comments.slice(0, 3).map(renderComment)}
        </ClientsTestimonialsInner>
      </MediaQuery>
    </ClientsTestimonialsWrapper>
  </section>
);

export default ClientsTestimonials;
