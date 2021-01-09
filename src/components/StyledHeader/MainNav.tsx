import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import { NavLink } from 'react-router-dom';

import { sectionNames } from '../sectionNames';

const MainNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 1.3em;
  text-transform: uppercase;
  transition: 0.2s;
`;

const navLinksOptions = sectionNames.map((name) => ({
  text: name,
  link: name.toLowerCase().split(' ').join('-'),
  key: shortid.generate(),
}));

export interface Props {
  handleLinkClick?: () => void;
  className?: string;
}

const MainNav: React.FC<Props> = ({ className, handleLinkClick }) => (
  <nav className={className}>
    {navLinksOptions.map(({ text, link, key }) => (
      <MainNavLink key={key} to={link} onClick={handleLinkClick}>
        {text}
      </MainNavLink>
    ))}
  </nav>
);

export { MainNav, MainNavLink };
