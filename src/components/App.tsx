import React, { Suspense, useEffect } from 'react';
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom';

import { StyledLoadingScreen } from './StyledLoadingScreen';
import { StyledHeader } from './StyledHeader/StyledHeader';
import { StyledNewsletterSection } from './StyledNewsletterSection';
import { StyledFooter } from './StyledFooter/StyledFooter';

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

interface CustomRouteProps extends RouteProps {
  title: string;
}

const CustomRoute: React.FC<CustomRouteProps> = ({ title, ...props }) => {
  useEffect(() => {
    document.title = `Hosting - ${title}`;
  });

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...props} />;
};

const App: React.FC = () => (
  <>
    <StyledHeader />
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
    <StyledFooter />
  </>
);

export { App };
