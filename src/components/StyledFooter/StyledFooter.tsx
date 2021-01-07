import React from 'react';
import styled from 'styled-components';

import { StyledWrapper } from '../StyledWrapper';
import { StyledLogo } from '../StyledLogo';
import { QuickLinks } from './QuickLinks';
import { ContactUs } from './ContactUs';
import { StyledSocialMedia } from './StyledSocialMedia';

const FooterWrapper = styled(StyledWrapper)`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    gap: 50px;
    justify-content: center;
  }
  @media (max-width: 650px) {
    grid-template-columns: max-content;
    justify-items: center;
  }
`;
const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  color: var(--text-color);
  font-size: 1.4rem;
  row-gap: 10px;

  @media (max-width: 1100px) {
    order: -1;
  }
`;

export interface Props {
  className?: string;
}

const Footer: React.FC<Props> = ({ className }) => (
  <footer className={className}>
    <FooterWrapper>
      <FooterLogo>
        <StyledLogo />
        2015 &#169; All rights reserved
      </FooterLogo>
      <QuickLinks />
      <ContactUs />
      <StyledSocialMedia />
    </FooterWrapper>
  </footer>
);

const StyledFooter = styled(Footer)`
  margin-top: auto;
  padding: 100px 0;
  background-color: #4c515b;
  ${StyledLogo} a {
    margin: 0;
    color: var(--blue);
  }

  @media (max-width: 1250px) {
    padding: 100px 20px;
  }
`;

export { StyledFooter };
