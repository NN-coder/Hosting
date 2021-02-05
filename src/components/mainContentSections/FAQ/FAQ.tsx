import React from 'react';

import { MainContentSectionPromo } from '../MainContentSectionPromo/MainContentSectionPromo';
import { QuestionFaqWithFetchedData } from './QuestionFaq';
import { SubmitYourQuestion } from './SubmitYourQuestion';

const FAQ: React.FC = () => (
  <section>
    <MainContentSectionPromo
      sectionName="faq"
      titleRowOne="FAQ"
      titleRowTwo="Questions"
      bgPosition="center 80%"
    />
    <QuestionFaqWithFetchedData />
    <SubmitYourQuestion />
  </section>
);

export default FAQ;
