import React, { useMemo } from 'react';
import styled from 'styled-components/macro';
import shortid from 'shortid';

const SliderItem = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
`;

function createSliderItemsOptions(children: React.ReactNode) {
  return React.Children.toArray(children).map((child) => ({
    content: child,
    itemKey: shortid.generate(),
  }));
}

export interface Props {
  currentSlide: number;
  children: React.ReactNode;
  className?: string;
}

const SliderTrack: React.FC<Props> = ({ currentSlide, children, className }) => {
  const sliderItemsOptions = useMemo(() => createSliderItemsOptions(children), [children]);

  return (
    <div className={className} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
      {sliderItemsOptions.map(({ content, itemKey }) => (
        <SliderItem key={itemKey}>{content}</SliderItem>
      ))}
    </div>
  );
};

const StyledSliderTrack = styled(SliderTrack)`
  display: flex;
  height: 100%;
  transition: transform 1s ease;
`;

export { StyledSliderTrack };
