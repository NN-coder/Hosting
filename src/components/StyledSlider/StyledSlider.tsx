import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import StyledSliderTrack from './StyledSliderTrack';
import StyledSliderDots from './StyledSliderDots';
import StyledSliderArrows, { Arrow } from './StyledSliderArrows';

function scrollSlider(direction: 'right' | 'left', slideCount: number, prevSlide: number) {
  if (direction === 'right') {
    return prevSlide === slideCount - 1 ? 0 : prevSlide + 1;
  }
  return prevSlide === 0 ? slideCount - 1 : prevSlide - 1;
}

export interface Props {
  children: React.ReactNode;
  navArrows?: boolean;
  className?: string;
}

const Slider: React.FC<Props> = ({ children, className, navArrows }) => {
  const [curSlide, changeSlide] = useState(0);
  const childrenCount = React.Children.count(children);

  const scrollRight = useCallback(
    (prevSlide: number) => scrollSlider('right', childrenCount, prevSlide),
    [childrenCount]
  );
  const scrollLeft = useCallback(
    (prevSlide: number) => scrollSlider('left', childrenCount, prevSlide),
    [childrenCount]
  );

  const [isHover, setHover] = useState(false);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isHover) {
      const timerID = setTimeout(() => changeSlide(scrollRight), 5000);
      return () => clearTimeout(timerID);
    }
  });

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <StyledSliderTrack currentSlide={curSlide}>{children}</StyledSliderTrack>
      {navArrows && (
        <StyledSliderArrows
          handleClickOnLeft={() => changeSlide(scrollLeft)}
          handleClickOnRight={() => changeSlide(scrollRight)}
        />
      )}
      <StyledSliderDots
        currentSlide={curSlide}
        count={childrenCount}
        handleDotClick={changeSlide}
      />
    </div>
  );
};

Slider.defaultProps = {
  navArrows: false,
};

const StyledSlider = styled(Slider)`
  overflow: hidden;
  user-select: none;
  touch-action: pan-y;
`;

export { StyledSlider as default, StyledSliderDots, StyledSliderArrows, Arrow };
