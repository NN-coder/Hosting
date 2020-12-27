import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Arrow = styled.button`
  color: white;
`;

const SliderArrows = ({ className, handleClickOnLeft, handleClickOnRight }) => (
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

SliderArrows.propTypes = {
  className: PropTypes.string,
  handleClickOnLeft: PropTypes.func.isRequired,
  handleClickOnRight: PropTypes.func.isRequired,
};
SliderArrows.defaultProps = {
  className: null,
};

const StyledSliderArrows = styled(SliderArrows)``;

export default StyledSliderArrows;
export { Arrow };
