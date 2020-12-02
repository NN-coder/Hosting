import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Header from './Header/Header';
import StyledNewsletterSection from './StyledNewsletterSection';

import Home from './mainContentSections/Home/Home';
import AboutUs from './mainContentSections/AboutUs/AboutUs';
import Service from './mainContentSections/Service/Service';
import HostingPlans from './mainContentSections/HostingPlans/HostingPlans';
import Domain from './mainContentSections/Domain/Domain';
import FAQ from './mainContentSections/FAQ/FAQ';
import Testimonials from './mainContentSections/Testimonials/Testimonials';
import Blog from './mainContentSections/Blog/Blog';
import Support from './mainContentSections/Support/Support';
import ContactUs from './mainContentSections/ContactUs/ContactUs';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
`;

const CustomRoute = ({ title, ...props }) => {
  useEffect(() => {
    document.title = `Hosting - ${title}`;
  });
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...props} />;
};
CustomRoute.propTypes = {
  title: PropTypes.string.isRequired,
};

const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <main>
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
      <StyledNewsletterSection />
    </BrowserRouter>
  </>
);

export default App;
