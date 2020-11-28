import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import shortid from 'shortid';

//* ================================================== Styles ==================================================
const SliderItem = styled.div`
  min-width: 100%;
  height: 100%;
`;

//* ================================================== Code ==================================================
class SliderTrack extends React.Component {
  static propTypes = {
    currentSlide: PropTypes.number.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    className: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    const { children } = this.props;
    this.sliderItemsContent = children.map((child) => ({
      content: child,
      itemKey: shortid.generate(),
    }));
  }

  render() {
    const { sliderItemsContent } = this;
    const { currentSlide, className } = this.props;

    return (
      <div className={className} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {sliderItemsContent.map(({ content, itemKey }) => (
          <SliderItem key={itemKey}>{content}</SliderItem>
        ))}
      </div>
    );
  }
}

//* ================================================== Styles ==================================================
const StyledSliderTrack = styled(SliderTrack)`
  display: flex;
  height: 100%;
  transition: transform 0.5s ease;
  @media screen and (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export default StyledSliderTrack;
