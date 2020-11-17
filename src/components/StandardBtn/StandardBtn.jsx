import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './StandardBtn.scss';

const StandardBtn = ({ className, children, type }) => {
  const classes = classnames('standard-btn', { [className]: className });

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

StandardBtn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};
StandardBtn.defaultProps = {
  className: '',
  type: 'button',
};

export default StandardBtn;
