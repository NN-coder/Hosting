import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import shortid from 'shortid';

const SliderItem = styled.div`
  min-width: 100%;
  height: 100%;
`;

function createSliderItemsOptions(chilren) {
  return React.Children.toArray(chilren).map((child) => ({
    content: child,
    itemKey: shortid.generate(),
  }));
}

const SliderTrack = ({ currentSlide, children, className }) => {
  const sliderItemsOptions = useMemo(() => createSliderItemsOptions(children), [children]);

  return (
    <div className={className} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
      {sliderItemsOptions.map(({ content, itemKey }) => (
        <SliderItem key={itemKey}>{content}</SliderItem>
      ))}
    </div>
  );
};

SliderTrack.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string.isRequired,
};

const StyledSliderTrack = styled(SliderTrack)`
  display: flex;
  height: 100%;
  transition: transform 1s ease;
  @media screen and (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export default StyledSliderTrack;
