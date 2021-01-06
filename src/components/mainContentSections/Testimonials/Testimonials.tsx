import React from 'react';

import { MainContentSectionPromo } from '../MainContentSectionPromo/MainContentSectionPromo';
import { ClientsTestimonials } from './ClientsTestimonials/ClientsTestimonials';
import { SubmitYourTestimonial } from './SubmitYourTestimonial/SubmitYourTestimonial';

const Testimonials: React.FC = () => (
  <section>
    <MainContentSectionPromo
      sectionName="testimonials"
      titleRowOne="Testimonials"
      titleRowTwo="Happy clients"
      bgPosition="center 70%"
    />
    <ClientsTestimonials />
    <SubmitYourTestimonial />
  </section>
);

export default Testimonials;
