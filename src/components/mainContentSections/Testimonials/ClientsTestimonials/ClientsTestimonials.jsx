import React from 'react';
import styled from 'styled-components';

import StyledWrapper from '../../../StyledWrapper';
import StyledStandardSectionTitle from '../../../StyledStandardSectionTitle';
import StyledComment from './StyledComment';
import comments from './comments';

const ClientsTestimonialsWrapper = styled(StyledWrapper)`
  padding: 80px 0;

  @media (max-width: 1250px) {
    padding: 80px 20px;
  }
`;
const ClientsTestimonialsInner = styled.div`
  margin-top: 70px;
  columns: 3;
  column-gap: 50px;
  > * {
    break-inside: avoid;
    margin-bottom: 50px;
  }

  @media (max-width: 1000px) {
    columns: 2;
  }
  @media (max-width: 700px) {
    columns: 1;
  }
`;

const ClientsTestimonials = () => (
  <section>
    <ClientsTestimonialsWrapper>
      <StyledStandardSectionTitle rowOne="Clients" rowTwo="Testimonials" />
      <ClientsTestimonialsInner>
        {comments.map(({ author, comment, images: { jpg, webp } }) => (
          <StyledComment name={author} image={jpg} imageWebp={webp}>
            {comment}
          </StyledComment>
        ))}
      </ClientsTestimonialsInner>
    </ClientsTestimonialsWrapper>
  </section>
);

export default ClientsTestimonials;
