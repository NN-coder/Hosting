import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import shortid from 'shortid';

import StandardBtn from '../StandardBtn';
import sectionNames from '../sectionNames';

const MainNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const MainNavLink = styled(StandardBtn).attrs({
  type: null,
})`
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

const HeaderNav = ({ onClick }) => (
  <MainNav>
    {navLinks.map(({ text, id, link }) => (
      <MainNavLink as={NavLink} key={id} to={link} onClick={onClick} activeClassName="active">
        {text}
      </MainNavLink>
    ))}
  </MainNav>
);

HeaderNav.propTypes = {
  onClick: PropTypes.func,
};
HeaderNav.defaultProps = {
  onClick: null,
};

export default HeaderNav;
export { MainNavLink };
