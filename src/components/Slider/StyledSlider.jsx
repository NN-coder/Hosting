import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SliderTrack from './StyledSliderTrack';
import StyledSliderDots from './StyledSliderDots';
import StyledSliderArrows, { Arrow } from './StyledSliderArrows';

//* ================================================== Code ==================================================
class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentSlide: 0 };
    this.changeSlide = this.changeSlide.bind(this);
  }

  changeSlide(num) {
    const { currentSlide } = this.state;
    const { children } = this.props;

    if (currentSlide !== num && num >= 0 && num < children.length) {
      this.setState({ currentSlide: num });
    }
  }

  render() {
    const { currentSlide } = this.state;
    const { children, className, navArrows } = this.props;

    return (
      <div className={className}>
        <SliderTrack currentSlide={currentSlide}>{children}</SliderTrack>
        <StyledSliderDots
          currentSlide={currentSlide}
          count={children.length}
          handleClick={this.changeSlide}
        />
        {navArrows && (
          <StyledSliderArrows
            handleClickOnLeft={() => this.changeSlide(currentSlide - 1)}
            handleClickOnRight={() => this.changeSlide(currentSlide + 1)}
          />
        )}
      </div>
    );
  }
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  navArrows: PropTypes.bool,
};
Slider.defaultProps = {
  navArrows: false,
};

//* ================================================== Styles ==================================================
const StyledSlider = styled(Slider)`
  overflow: hidden;
`;

export default StyledSlider;
export { StyledSliderDots, StyledSliderArrows, Arrow };
