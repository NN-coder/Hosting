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

const RouteWithTitle = ({ title, ...props }) => {
  document.title = `Hosting - ${title}`;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...props} />;
};
RouteWithTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

const App = () => (
  <BrowserRouter>
    <Header />
    <main className="main">
      <Switch>
        <RouteWithTitle title="Home" path="/home" component={Home} />
        <RouteWithTitle title="About us" path="/about-us" component={AboutUs} />
        <RouteWithTitle title="Service" path="/service" component={Service} />
        <RouteWithTitle title="Hosting plans" path="/hosting-plans" component={HostingPlans} />
        <RouteWithTitle title="Domain" path="/domain" component={Domain} />
        <RouteWithTitle title="FAQ" path="/faq" component={FAQ} />
        <RouteWithTitle title="Testimonials" path="/testimonials" component={Testimonials} />
        <RouteWithTitle title="Blog" path="/blog" component={Blog} />
        <RouteWithTitle title="Support" path="/support" component={Support} />
        <RouteWithTitle title="Contact us" path="/contact-us" component={ContactUs} />
        <Redirect from="/" to="/home" />
      </Switch>
    </main>
    <NewsletterSection />
  </BrowserRouter>
);

export default App;
