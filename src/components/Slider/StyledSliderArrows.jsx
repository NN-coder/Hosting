import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Svg from '../Svg';

const Arrow = styled.button``;

const SliderArrows = ({ className, handleClickOnLeft, handleClickOnRight }) => (
  <div className={className}>
    <Arrow type="button" onClick={handleClickOnLeft}>
      <Svg width="15px" height="15px" viewBox="0 0 285 285" fill="#fff">
        <g>
          <path
            d="M110.488,142.468L222.694,30.264c1.902-1.903,2.854-4.093,2.854-6.567c0-2.474-0.951-4.664-2.854-6.563L208.417,2.857
		          C206.513,0.955,204.324,0,201.856,0c-2.475,0-4.664,0.955-6.567,2.857L62.24,135.9c-1.903,1.903-2.852,4.093-2.852,6.567
		          c0,2.475,0.949,4.664,2.852,6.567l133.042,133.043c1.906,1.906,4.097,2.857,6.571,2.857c2.471,0,4.66-0.951,6.563-2.857
		          l14.277-14.267c1.902-1.903,2.851-4.094,2.851-6.57c0-2.472-0.948-4.661-2.851-6.564L110.488,142.468z"
          />
        </g>
      </Svg>
    </Arrow>
    <Arrow type="button" onClick={handleClickOnRight}>
      <Svg width="15px" height="15px" viewBox="0 0 285 285" fill="#fff">
        <g>
          <path
            d="M222.701,135.9L89.652,2.857C87.748,0.955,85.557,0,83.084,0c-2.474,0-4.664,0.955-6.567,2.857L62.244,17.133
		          c-1.906,1.903-2.855,4.089-2.855,6.567c0,2.478,0.949,4.664,2.855,6.567l112.204,112.204L62.244,254.677
		          c-1.906,1.903-2.855,4.093-2.855,6.564c0,2.477,0.949,4.667,2.855,6.57l14.274,14.271c1.903,1.905,4.093,2.854,6.567,2.854
		          c2.473,0,4.663-0.951,6.567-2.854l133.042-133.044c1.902-1.902,2.854-4.093,2.854-6.567S224.603,137.807,222.701,135.9z"
          />
        </g>
      </Svg>
    </Arrow>
  </div>
);

SliderArrows.propTypes = {
  className: PropTypes.string,
  handleClickOnLeft: PropTypes.func.isRequired,
  handleClickOnRight: PropTypes.func.isRequired,
};
SliderArrows.defaultProps = {
  className: '',
};

const StyledSliderArrows = styled(SliderArrows)``;

export default StyledSliderArrows;
export { Arrow };
