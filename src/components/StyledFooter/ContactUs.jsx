import React from 'react';
import styled from 'styled-components';

import StyledFooterSectionTitle from './StyledFooterSectionTitle';

const ContactUsList = styled.ul`
  max-width: 220px;
  color: var(--text-color);
  font-size: 1.4rem;
  line-height: 30px;
  a {
    color: inherit;
    transition: color 0.2s ease;
    @media screen and (prefers-reduced-motion: reduce) {
      transition: none;
    }
    &:hover,
    &:focus {
      color: var(--blue);
    }
  }
`;
const Title = styled.span`
  color: var(--blue);
`;

const ContactUs = () => (
  <div>
    <StyledFooterSectionTitle>Contact us</StyledFooterSectionTitle>
    <ContactUsList>
      <li>
        <Title>Address: </Title>
        Lorem ipsum dolor sit amet consectetur elit.
      </li>
      <li>
        <Title>Email: </Title>
        <a href="mailto:info@hosting.com">info@hosting.com</a>
      </li>
      <li>
        <Title>Call: </Title>
        <a href="tel:+877765557888">+87 7765 557 888</a>
      </li>
    </ContactUsList>
  </div>
);

export default ContactUs;
