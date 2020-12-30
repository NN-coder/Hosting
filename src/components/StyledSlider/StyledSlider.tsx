import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';

import SliderTrack from './StyledSliderTrack';
import StyledSliderDots from './StyledSliderDots';
import StyledSliderArrows, { Arrow } from './StyledSliderArrows';

type Direction = 'right' | 'left';

function scrollSlider(direction: Direction, slideCount: number, curSlide: number) {
  if (direction === 'right') {
    return curSlide === slideCount - 1 ? 0 : curSlide + 1;
  }
  return curSlide === 0 ? slideCount - 1 : curSlide - 1;
}

export interface Props {
  children: React.ReactNode;
  navArrows?: boolean;
  className?: string;
}

const Slider: React.FC<Props> = ({ children, className, navArrows }) => {
  const [curSlide, changeSlide] = useState(0);
  const childrenCount = React.Children.count(children);

  const scrollRight = useMemo(() => scrollSlider.bind(null, 'right', childrenCount), [
    childrenCount,
  ]);
  const scrollLeft = useMemo(() => scrollSlider.bind(null, 'left', childrenCount), [childrenCount]);

  useEffect(() => {
    const timerID = setTimeout(() => changeSlide(scrollRight), 5000);
    return () => clearTimeout(timerID);
  });

  return (
    <div className={className}>
      <SliderTrack currentSlide={curSlide}>{children}</SliderTrack>
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
`;

export default StyledSlider;
export { StyledSliderDots, StyledSliderArrows, Arrow };
