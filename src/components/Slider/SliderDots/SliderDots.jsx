import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './SliderDots.scss';

const SliderDots = ({ currentSlide, count, handleClick }) => {
  const sliderDots = [];
  for (let i = 0; i < count; i += 1) {
    sliderDots.push({ slideNum: i, onClick: () => handleClick(i) });
  }

  return (
    <div className="slider-dots">
      {sliderDots.map(({ slideNum, onClick }) => {
        const classes = classnames('slider-dots__item', {
          'slider-dots__item--active': currentSlide === slideNum,
        });

        return (
          <button className={classes} onClick={onClick}>
            {`Show slide number ${slideNum}`}
          </button>
        );
      })}
    </div>
  );
};

SliderDots.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SliderDots;
