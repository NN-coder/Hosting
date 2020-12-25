import React, { useCallback } from 'react';
import styled from 'styled-components';

import StyledWrapper from '../../../StyledWrapper';
import StyledStandardSectionTitle from '../../../StyledStandardSectionTitle';
import StandardBtn from '../../../StandardBtn';
import StyledQuestionFormItem from './StyledQuestionFormItem';

const QuestionForm = styled.form`
  display: grid;
  grid-auto-rows: 60px;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  margin-top: 35px;
  column-gap: 30px;
  row-gap: 10px;
`;
const QuestionFormSubmit = styled(StandardBtn)`
  grid-column: 1 / -1;
  width: 160px;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.1em;
`;

const SubmitYourQuestionWrapper = styled(StyledWrapper)`
  padding: 85px 0 110px;

  @media (max-width: 1250px) {
    padding: 85px 20px 110px;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${QuestionFormSubmit} {
      justify-self: center;
    }
  }
`;

const QuestionFormInput = styled(StyledQuestionFormItem)`
  @media (max-width: 800px) {
    grid-column: 1 / -1;
  }
`;
const QuestionFormSubjectInput = styled(StyledQuestionFormItem)`
  grid-column: 1 / -1;
`;
const QuestionFormQuestionsInput = styled(StyledQuestionFormItem)`
  grid-row: span 3;
  grid-column: 1 / -1;
`;

const SubmitYourQuestion = () => {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    // TODO: Replace with a modal
    // eslint-disable-next-line no-alert
    alert('Understood, accepted, processed');
  }, []);

  return (
    <section>
      <SubmitYourQuestionWrapper>
        <StyledStandardSectionTitle rowOne="Submit your" rowTwo="Question" />
        <QuestionForm action="" method="post" onSubmit={handleSubmit}>
          <QuestionFormInput
            inputAs="input"
            inputType="text"
            inputName="name"
            placeholder="Name"
            isRequired
          />
          <QuestionFormInput
            inputAs="input"
            inputType="email"
            inputName="email"
            placeholder="Email"
            isRequired
          />
          <QuestionFormSubjectInput
            inputAs="input"
            inputType="text"
            inputName="subject"
            placeholder="Subject"
            isRequired
          />
          <QuestionFormQuestionsInput
            inputAs="textarea"
            inputName="questions"
            placeholder="Ask your questions here"
            isRequired
          />
          <QuestionFormSubmit type="submit">Submit</QuestionFormSubmit>
        </QuestionForm>
      </SubmitYourQuestionWrapper>
    </section>
  );
};

export default SubmitYourQuestion;
