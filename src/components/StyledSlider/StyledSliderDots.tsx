import React, { useMemo, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import shortid from 'shortid';

const Dot = styled.button<{ active?: boolean }>`
  width: 15px;
  height: 15px;
  font-size: 0;
  background: none;
  border: 2px solid;
  border-color: ${({ active, theme }) => (active ? theme.activeDotColor : theme.dotColor)};
  border-radius: 50%;
  transition: all 0.3s ease;
  @media screen and (prefers-reduced-motion: reduce) {
    transition: none;
  }
  &:hover,
  &:focus {
    background-color: ${({ active, theme }) => (active ? theme.activeDotColor : theme.dotColor)};
  }
`;

function createDotsOptions(count: number, handleClick: Dispatch<SetStateAction<number>>) {
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

export interface Props {
  currentSlide: number;
  count: number;
  handleDotClick: Dispatch<SetStateAction<number>>;
  className?: string;
}

const SliderDots: React.FC<Props> = ({ currentSlide, count, handleDotClick, className }) => {
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

const StyledSliderDots = styled(SliderDots)`
  display: flex;
  column-gap: 5px;
`;

export default StyledSliderDots;
