import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './StandardBtn.scss';

const StandardBtn = ({ className, children, type, onClick }) => {
  const classes = classnames('standard-btn', { [className]: className });

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

StandardBtn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
StandardBtn.defaultProps = {
  className: '',
  type: 'button',
  onClick: null,
};

export default StandardBtn;
