import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import { NavLink } from 'react-router-dom';

import { StyledFooterSectionTitle } from './StyledFooterSectionTitle';
import { sectionNames } from '../sectionNames';

const QuickLinksList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(5, max-content);
  line-height: 30px;
  column-gap: 60px;
`;
const QuickLinksListItem = styled(NavLink)`
  color: var(--text-color);
  font-size: 1.4rem;
  transition: color 0.2s ease;
  &:hover,
  &:focus {
    color: white;
  }
`;

const navLinks = sectionNames.map((name) => ({
  text: name,
  link: name.toLowerCase().split(' ').join('-'),
  id: shortid.generate(),
}));

const QuickLinks: React.FC = () => (
  <div>
    <StyledFooterSectionTitle>Quick Links</StyledFooterSectionTitle>
    <QuickLinksList>
      {navLinks.map(({ text, link, id }) => (
        <li key={id}>
          <QuickLinksListItem to={link}>{text}</QuickLinksListItem>
        </li>
      ))}
    </QuickLinksList>
  </div>
);

export { QuickLinks };
