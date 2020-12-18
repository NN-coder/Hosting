import React from 'react';

import MainContentSectionPromo from '../MainContentSectionPromo/MainContentSectionPromo';
import SubmitYourQuestion from './SubmitYourQuestion/SubmitYourQuestion';

const FAQ = () => (
  <section>
    <MainContentSectionPromo
      sectionName="faq"
      titleRowOne="FAQ"
      titleRowTwo="Questions"
      bgPosition="center 80%"
    />
    <SubmitYourQuestion />
  </section>
);

export default FAQ;
