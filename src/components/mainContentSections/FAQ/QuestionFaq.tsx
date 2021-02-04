/* eslint-disable import/no-mutable-exports */
import React from 'react';
import styled from 'styled-components';

import { StyledWrapper } from '../../StyledWrapper';
import { StyledStandardSectionTitle } from '../../StyledStandardSectionTitle';
import { StandardBtn } from '../../StandardBtn';
import { withFetchedData, WithFetchedDataProps } from '../../withFetchedData/withFetchedData';

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
  padding-top: 80px;
  padding-bottom: 80px;
  border-bottom: 1px solid var(--border-color);

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

type Questions = { question: string; answer: string; id: string }[];

export type Props = WithFetchedDataProps<Questions>;

let QuestionFaq: React.FC<Props> = ({ data: questions }) => (
  <section>
    <QuestionFaqWrapper>
      <StyledStandardSectionTitle rowOne="Question" rowTwo="Faq's" />
      {questions?.map(({ question, answer, id }) => (
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

QuestionFaq = withFetchedData<Questions, Props>(
  QuestionFaq,
  `${process.env.PUBLIC_URL}/json/questions.json`
);

export { QuestionFaq };
