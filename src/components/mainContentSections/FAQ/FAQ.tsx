import React from 'react';

import { MainContentSectionPromo } from '../MainContentSectionPromo/MainContentSectionPromo';
import { QuestionFaq } from './QuestionFaq';
import { SubmitYourQuestion } from './SubmitYourQuestion';

const FAQ: React.FC = () => (
  <section>
    <MainContentSectionPromo
      sectionName="faq"
      titleRowOne="FAQ"
      titleRowTwo="Questions"
      bgPosition="center 80%"
    />
    <QuestionFaq />
    <SubmitYourQuestion />
  </section>
);

export default FAQ;
