import React from 'react';
import './Logo.scss';
import logo from './logo.png';

const Logo = () => (
  <h1 className="logo">
    <a href="/" className="logo__link">
      <img src={logo} alt="" className="lozad logo__img" />
      Hosting
    </a>
  </h1>
);

export default Logo;
