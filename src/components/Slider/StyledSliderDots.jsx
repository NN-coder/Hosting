import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import shortid from 'shortid';

//* ================================================== Styles ==================================================
const Dot = styled.button`
  width: 15px;
  height: 15px;
  font-size: 0;
  background: none;
  border: 2px solid;
  border-color: ${(props) => (props.active ? props.theme.activeDotColor : props.theme.dotColor)};
  border-radius: 50%;
  transition: all 0.3s ease;
  @media screen and (prefers-reduced-motion: reduce) {
    transition: none;
  }
  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.active ? props.theme.activeDotColor : props.theme.dotColor};
  }
`;

//* ================================================== Code ==================================================
class SliderDots extends React.Component {
  static propTypes = {
    currentSlide: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.sliderDots = [];

    const { count, handleClick } = this.props;
    for (let i = 0; i < count; i += 1) {
      this.sliderDots.push({
        slideNum: i,
        onClick: () => handleClick(i),
        dotKey: shortid.generate(),
      });
    }
  }

  render() {
    const { sliderDots } = this;
    const { currentSlide, className } = this.props;

    return (
      <div className={className}>
        {sliderDots.map(({ slideNum, onClick, dotKey }) => (
          <Dot key={dotKey} onClick={onClick} type="button" active={currentSlide === slideNum}>
            {`Show slide number ${slideNum + 1}`}
          </Dot>
        ))}
      </div>
    );
  }
}

//* ================================================== Styles ==================================================
const StyledSliderDots = styled(SliderDots)`
  display: flex;
  column-gap: 5px;
`;

export default StyledSliderDots;
