import React from 'react';

import MainContentSectionPromo from '../MainContentSectionPromo/MainContentSectionPromo';
import ClientsTestimonials from './ClientsTestimonials/ClientsTestimonials';

const Testimonials = () => (
  <section>
    <MainContentSectionPromo
      sectionName="testimonials"
      titleRowOne="Testimonials"
      titleRowTwo="Happy clients"
      bgPosition="center 70%"
    />
    <ClientsTestimonials />
  </section>
);

export default Testimonials;
