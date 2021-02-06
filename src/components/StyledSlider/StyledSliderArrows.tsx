import React from 'react';
import styled from 'styled-components/macro';
import { IconContext } from 'react-icons';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const Arrow = styled.button.attrs({ type: 'button' })`
  color: white;
`;

export interface Props {
  handleClickOnLeft: () => void;
  handleClickOnRight: () => void;
  className?: string;
}

const SliderArrows: React.FC<Props> = ({ className, handleClickOnLeft, handleClickOnRight }) => (
  <div className={className}>
    <IconContext.Provider value={{ size: '100%' }}>
      <Arrow onClick={handleClickOnLeft} aria-label="Previous">
        <IoIosArrowDropleft />
      </Arrow>
      <Arrow onClick={handleClickOnRight} aria-label="Next">
        <IoIosArrowDropright />
      </Arrow>
    </IconContext.Provider>
  </div>
);

const StyledSliderArrows = styled(SliderArrows)``;

export { StyledSliderArrows, Arrow };
