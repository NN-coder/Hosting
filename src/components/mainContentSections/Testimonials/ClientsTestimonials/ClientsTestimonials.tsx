import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

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

const ClientsTestimonialsInner = styled.div`
  display: grid;
  margin-top: 70px;
  column-gap: 30px;
  row-gap: 50px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`;

const getColumns = (columnsCount: number, commentsCount: number) => {
  const columns = Array.from({ length: columnsCount }, (): Comment[] => []);
  for (let i = 0; i < commentsCount; i += 1) {
    columns[i % columnsCount].push(comments[i]);
  }
  return columns;
};

const renderColumn = (column: Comment[], num: number) => (
  <Column key={num}>
    {column.map(({ author, comment, id, images: { jpg, webp } }) => (
      <StyledComment key={id} name={author} image={jpg} imageWebp={webp}>
        {comment}
      </StyledComment>
    ))}
  </Column>
);

const ClientsTestimonials: React.FC = () => (
  <section>
    <ClientsTestimonialsWrapper>
      <StyledStandardSectionTitle rowOne="Clients" rowTwo="Testimonials" />

      <MediaQuery minDeviceWidth={1000.1}>
        <ClientsTestimonialsInner style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {getColumns(3, 9).map(renderColumn)}
        </ClientsTestimonialsInner>
      </MediaQuery>

      <MediaQuery minDeviceWidth={700.1} maxDeviceWidth={1000}>
        <ClientsTestimonialsInner style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {getColumns(2, 6).map(renderColumn)}
        </ClientsTestimonialsInner>
      </MediaQuery>

      <MediaQuery maxDeviceWidth={700}>
        <ClientsTestimonialsInner style={{ gridTemplateColumns: '1fr' }}>
          {getColumns(1, 3).map(renderColumn)}
        </ClientsTestimonialsInner>
      </MediaQuery>
    </ClientsTestimonialsWrapper>
  </section>
);

export default ClientsTestimonials;
