import React from 'react';
import styled from 'styled-components';

import { StyledWrapper } from '../../../StyledWrapper';
import { StyledStandardSectionTitle } from '../../../StyledStandardSectionTitle';
import { StandardBtn } from '../../../StandardBtn';
import { questions } from './questions';

const QuestionCard = styled.div`
  display: flex;
  align-items: start;
  font-weight: 800;
  font-size: 1.4rem;
  column-gap: 30px;
  &:before {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 65px;
    height: 65px;
    color: white;
    font-size: 3rem;
    text-transform: uppercase;
    background-color: var(--accent-color);
    content: 'q';
  }
`;
const QuestionCardTitle = styled.div`
  margin: 25px 0;
  color: var(--text-color-primary);
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;
const QuestionCardText = styled.p`
  max-width: 600px;
  color: var(--text-color);
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
`;

const AskBtn = styled(StandardBtn)`
  grid-column: 1 / -1;
  justify-self: center;
  width: 100%;
  max-width: 400px;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.1em;
`;

const QuestionFaqWrapper = styled(StyledWrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  padding: 80px 0;
  border-bottom: 1px solid #d3e5eb;

  @media (max-width: 1250px) {
    padding: 80px 20px;
  }
  @media (max-width: 1000px) {
    ${QuestionCard} {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const QuestionFaq: React.FC = () => (
  <section>
    <QuestionFaqWrapper>
      <StyledStandardSectionTitle rowOne="Question" rowTwo="Faq's" />
      {questions.map(({ question, answer, id }) => (
        <QuestionCard key={id}>
          <div>
            <QuestionCardTitle>{question}</QuestionCardTitle>
            <QuestionCardText>{answer}</QuestionCardText>
          </div>
        </QuestionCard>
      ))}
      <AskBtn>Ask your questions through email</AskBtn>
    </QuestionFaqWrapper>
  </section>
);

export { QuestionFaq };
