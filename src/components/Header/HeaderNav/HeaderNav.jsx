import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import shortid from 'shortid';
// import StandardBtn from '../../StandardBtn/StandardBtn';
import sectionNames from '../../sectionNames';
import './HeaderNav.scss';

const navLinks = sectionNames.map((name) => {
  return { text: name, link: name.toLowerCase().split(' ').join('-'), id: shortid.generate() };
});

const HeaderNav = ({ onClick }) => (
  <nav className="main-nav">
    {navLinks.map(({ text, id, link }) => (
      <NavLink
        key={id}
        to={link}
        onClick={onClick}
        className="standard-btn main-nav__link"
        activeClassName="main-nav__link--active"
      >
        {text}
      </NavLink>
    ))}
  </nav>
);

HeaderNav.propTypes = {
  onClick: PropTypes.func,
};
HeaderNav.defaultProps = {
  onClick: null,
};

export default HeaderNav;
