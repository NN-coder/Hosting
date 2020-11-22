import React from 'react';
import PropTypes from 'prop-types';

const SliderTrack = ({ currentSlide, children }) => (
  <div style={{ transform: `translateX(-${currentSlide * 100}%)` }} className="slider-track">
    {children.map((child) => (
      <div className="slider-item">{child}</div>
    ))}
  </div>
);

SliderTrack.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default SliderTrack;
