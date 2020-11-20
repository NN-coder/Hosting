import React from 'react';
import AppContext from '../AppContext';
import * as sections from './sections';
import './Main.scss';

const {
  HomeSection,
  AboutUsSection,
  ServiceSection,
  HostingPlansSection,
  DomainSection,
  FAQSection,
  TestimonialsSection,
  BlogSection,
  SupportSection,
  ContactUsSection,
} = sections;

class Main extends React.Component {
  static contextType = AppContext;

  render() {
    const { currentSection } = this.context;

    return (
      <main className="main">
        <HomeSection currentSection={currentSection} />
        <AboutUsSection currentSection={currentSection} />
        <ServiceSection currentSection={currentSection} />
        <HostingPlansSection currentSection={currentSection} />
        <DomainSection currentSection={currentSection} />
        <FAQSection currentSection={currentSection} />
        <TestimonialsSection currentSection={currentSection} />
        <BlogSection currentSection={currentSection} />
        <SupportSection currentSection={currentSection} />
        <ContactUsSection currentSection={currentSection} />
      </main>
    );
  }
}

export default Main;
