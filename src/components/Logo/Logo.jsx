import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Logo.scss';
import logo from './logo.png';

const Logo = ({ className }) => {
  const classes = classnames('logo', { [className]: className });

  return (
    <h1 className={classes}>
      <a href="/" className="logo__link">
        <img src={logo} alt="" className="lozad logo__img" />
        Hosting
      </a>
    </h1>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};
Logo.defaultProps = {
  className: '',
};

export default Logo;
