import React, { useCallback } from 'react';
import styled from 'styled-components/macro';

import { StyledWrapper } from '../../StyledWrapper';
import { StyledStandardSectionTitle } from '../../StyledStandardSectionTitle';
import { StyledStandardForm } from '../../StyledStandardForm';

const SubmitYourQuestionWrapper = styled(StyledWrapper)`
  padding-top: 85px;
  padding-bottom: 110px;

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
        <StyledStandardForm
          name="submit-your-question"
          action=""
          method="post"
          handleSubmit={handleSubmit}
        />
      </SubmitYourQuestionWrapper>
    </section>
  );
};

export { SubmitYourQuestion };
