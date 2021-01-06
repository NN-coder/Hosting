import React, { useCallback } from 'react';
import styled from 'styled-components';

import { StyledWrapper } from '../../../StyledWrapper';
import { StyledStandardSectionTitle } from '../../../StyledStandardSectionTitle';
import { StyledStandardForm } from '../../../StyledStandardForm';

const SubmitYourTestimonialWrapper = styled(StyledWrapper)`
  padding: 100px 0;

  @media (max-width: 1250px) {
    padding: 100px 20px;
  }
`;

const SubmitYourTestimonial: React.FC = () => {
  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Replace with a modal
    // eslint-disable-next-line no-alert
    alert('Understood, accepted, processed');
  }, []);

  return (
    <section>
      <SubmitYourTestimonialWrapper>
        <StyledStandardSectionTitle rowOne="Submit your" rowTwo="Testimonial" />
        <StyledStandardForm
          name="submit-your-testimonial"
          action=""
          method="post"
          handleSubmit={handleSubmit}
        />
      </SubmitYourTestimonialWrapper>
    </section>
  );
};

export { SubmitYourTestimonial };
