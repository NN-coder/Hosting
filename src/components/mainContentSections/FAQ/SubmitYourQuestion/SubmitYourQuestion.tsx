import React, { useCallback } from 'react';
import styled from 'styled-components';

import StyledWrapper from '../../../StyledWrapper';
import StyledStandardSectionTitle from '../../../StyledStandardSectionTitle';
import StandardForm from '../../../StyledStandardForm';

const SubmitYourQuestionWrapper = styled(StyledWrapper)`
  padding: 85px 0 110px;

  @media (max-width: 1250px) {
    padding: 85px 20px 110px;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SubmitYourQuestion: React.FC = () => {
  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Replace with a modal
    // eslint-disable-next-line no-alert
    alert('Understood, accepted, processed');
  }, []);

  return (
    <section>
      <SubmitYourQuestionWrapper>
        <StyledStandardSectionTitle rowOne="Submit your" rowTwo="Question" />
        <StandardForm
          name="submit-your-question"
          action=""
          method="post"
          handleSubmit={handleSubmit}
        />
      </SubmitYourQuestionWrapper>
    </section>
  );
};

export default SubmitYourQuestion;
