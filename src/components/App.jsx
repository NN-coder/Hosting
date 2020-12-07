import React, { Suspense, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import StyledLoadingScreen from './StyledLoadingScreen/StyledLoadingScreen';
import Header from './Header/Header';
import StyledNewsletterSection from './StyledNewsletterSection';

const Home = React.lazy(() => import('./mainContentSections/Home/Home'));
const AboutUs = React.lazy(() => import('./mainContentSections/AboutUs/AboutUs'));
const Service = React.lazy(() => import('./mainContentSections/Service/Service'));
const HostingPlans = React.lazy(() => import('./mainContentSections/HostingPlans/HostingPlans'));
const Domain = React.lazy(() => import('./mainContentSections/Domain/Domain'));
const FAQ = React.lazy(() => import('./mainContentSections/FAQ/FAQ'));
const Testimonials = React.lazy(() => import('./mainContentSections/Testimonials/Testimonials'));
const Blog = React.lazy(() => import('./mainContentSections/Blog/Blog'));
const Support = React.lazy(() => import('./mainContentSections/Support/Support'));
const ContactUs = React.lazy(() => import('./mainContentSections/ContactUs/ContactUs'));

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;

    --accent-color: #ff8261;
    --accent-color-active: #52cbf8;
    --header-elements-color: #161920;
    --section-bg-blue: #e7f4f8;
    --section-bg-orange: #fffbde;
    --text-color: #a0a9b6;
    --text-color-primary: #556b72;
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
        <Suspense fallback={<StyledLoadingScreen />}>
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
        </Suspense>
      </main>
      <StyledNewsletterSection />
    </BrowserRouter>
  </>
);

export default App;
