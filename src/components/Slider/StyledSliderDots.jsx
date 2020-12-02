import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import shortid from 'shortid';

const Dot = styled.button`
  width: 15px;
  height: 15px;
  font-size: 0;
  background: none;
  border: 2px solid;
  border-color: ${(props) => (props.active ? props.theme.activeDotColor : props.theme.dotColor)};
  border-radius: 50%;
  transition: all 0.3s ease;
  @media screen and (prefers-reduced-motion: reduce) {
    transition: none;
  }
  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.active ? props.theme.activeDotColor : props.theme.dotColor};
  }
`;

function createDotsOptions(count, handleClick) {
  const dotsOptions = [];

  for (let i = 0; i < count; i += 1) {
    dotsOptions.push({
      slideNum: i,
      onClick: () => handleClick(i),
      dotKey: shortid.generate(),
    });
  }

  return dotsOptions;
}

const SliderDots = ({ currentSlide, count, handleDotClick, className }) => {
  const dotsOptions = useMemo(() => createDotsOptions(count, handleDotClick), [
    count,
    handleDotClick,
  ]);

  return (
    <div className={className}>
      {dotsOptions.map(({ slideNum, onClick, dotKey }) => (
        <Dot type="button" key={dotKey} onClick={onClick} active={currentSlide === slideNum}>
          {`Show slide number ${slideNum + 1}`}
        </Dot>
      ))}
    </div>
  );
};

SliderDots.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  handleDotClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

const StyledSliderDots = styled(SliderDots)`
  display: flex;
  column-gap: 5px;
`;

export default StyledSliderDots;
