import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header/Header';
import * as sections from './mainContentSections/mainContentSections';
import NewsletterSection from './NewsletterSection/NewsletterSection';
import './App.scss';

const {
  Home,
  AboutUs,
  Service,
  HostingPlans,
  Domain,
  FAQ,
  Testimonials,
  Blog,
  Support,
  ContactUs,
} = sections;

const CustomRoute = ({ title, ...props }) => {
  document.title = `Hosting - ${title}`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...props} />;
};
CustomRoute.propTypes = {
  title: PropTypes.string.isRequired,
};

const App = () => (
  <BrowserRouter>
    <Header />
    <main className="main">
      <Switch>
        <CustomRoute title="Home" path="/home" component={Home} />
        <CustomRoute title="About us" path="/about-us" component={AboutUs} />
        <CustomRoute title="Service" path="/service" component={Service} />
        <CustomRoute title="Hosting plans" path="/hosting-plans" component={HostingPlans} />
        <CustomRoute title="Domain" path="/domain" component={Domain} />
        <CustomRoute title="FAQ" path="/faq" component={FAQ} />
        <CustomRoute title="Testimonials" path="/testimonials" component={Testimonials} />
        <CustomRoute title="Blog" path="/blog" component={Blog} />
        <CustomRoute title="Support" path="/support" component={Support} />
        <CustomRoute title="Contact us" path="/contact-us" component={ContactUs} />
        <Redirect from="/" to="/home" />
      </Switch>
    </main>
    <NewsletterSection />
  </BrowserRouter>
);

export default App;
