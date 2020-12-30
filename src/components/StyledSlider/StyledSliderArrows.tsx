import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Arrow = styled.button`
  color: white;
`;

export interface Props {
  handleClickOnLeft: () => void;
  handleClickOnRight: () => void;
  className?: string;
}

const SliderArrows: React.FC<Props> = ({ className, handleClickOnLeft, handleClickOnRight }) => (
  <div className={className}>
    <IconContext.Provider value={{ size: '23px' }}>
      <Arrow type="button" onClick={handleClickOnLeft}>
        <IoIosArrowBack />
      </Arrow>
      <Arrow type="button" onClick={handleClickOnRight}>
        <IoIosArrowForward />
      </Arrow>
    </IconContext.Provider>
  </div>
);

const StyledSliderArrows = styled(SliderArrows)``;

export default StyledSliderArrows;
export { Arrow };
