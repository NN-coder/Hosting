import React from 'react';
import shortid from 'shortid';
import StandardBtn from '../../StandardBtn/StandardBtn';
import sectionNames from '../../../sectionNames';
import './HeaderNav.scss';

const navBtns = sectionNames.map((name) => {
  return { text: name, id: shortid.generate() };
});

const HeaderNav = () => (
  <nav className="main-nav">
    {navBtns.map(({ text, id }) => (
      <StandardBtn key={id} className="main-nav__item">
        {text}
      </StandardBtn>
    ))}
  </nav>
);

export default HeaderNav;
