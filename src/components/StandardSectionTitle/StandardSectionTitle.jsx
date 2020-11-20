import React from 'react';
import PropTypes from 'prop-types';
import './StandardSectionTitle.scss';

const StandardSectionTitle = ({ rowOne, rowTwo, beforeImg }) => (
  <h3 className="standard-section-title">
    {beforeImg && <div className="standard-section-title__before">{beforeImg}</div>}
    {!beforeImg && (
      <div className="standard-section-title__before standard-section-title__before--line" />
    )}
    <div className="standard-section-title__row-1">{rowOne}</div>
    <div className="standard-section-title__row-2">{rowTwo}</div>
  </h3>
);

StandardSectionTitle.propTypes = {
  rowOne: PropTypes.string.isRequired,
  rowTwo: PropTypes.string.isRequired,
  beforeImg: PropTypes.node,
};
StandardSectionTitle.defaultProps = {
  beforeImg: null,
};

export default StandardSectionTitle;
