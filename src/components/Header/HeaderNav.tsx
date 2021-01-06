import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import { NavLink } from 'react-router-dom';

import { StandardBtn } from '../StandardBtn';
import { sectionNames } from '../sectionNames';

const MainNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const MainNavLink = styled(StandardBtn)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  font-size: 1.3rem;
  &.active {
    background-color: var(--accent-color-active);
  }

  @media screen and (max-width: 1150px) {
    width: 20%;
  }
`;

const navLinks = sectionNames.map((name) => ({
  text: name,
  link: name.toLowerCase().split(' ').join('-'),
  id: shortid.generate(),
}));

export interface Props {
  handleClick?: () => void;
}

const HeaderNav: React.FC<Props> = ({ handleClick }) => (
  <MainNav>
    {navLinks.map(({ text, id, link }) => (
      <MainNavLink as={NavLink} key={id} to={link} onClick={handleClick}>
        {text}
      </MainNavLink>
    ))}
  </MainNav>
);

export { HeaderNav, MainNavLink };
