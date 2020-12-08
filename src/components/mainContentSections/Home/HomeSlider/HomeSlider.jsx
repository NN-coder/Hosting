import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import StyledSlider, {
  StyledSliderDots,
  StyledSliderArrows,
  Arrow,
} from '../../../StyledSlider/StyledSlider';
import StyledHomeSliderItem from './StyledHomeSliderItem';

const SlideContent = styled.div`
  position: absolute;
  bottom: 140px;
  left: 50%;
  color: white;
  text-align: center;
  text-transform: uppercase;
  transform: translateX(-50%);
`;
const SlideContentTitle = styled.div`
  font-weight: 800;
  font-size: 4rem;
  letter-spacing: 0.025em;

  @media screen and (max-width: 600px) {
    font-size: 3.5rem;
  }
`;
const SlideContentSubtitle = styled.div`
  font-weight: 300;
  font-size: 2rem;
  letter-spacing: 0.095em;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const theme = {
  dotColor: 'var(--accent-color)',
  activeDotColor: '#5278db',
};

const HomeSlider = ({ className }) => (
  <ThemeProvider theme={theme}>
    <StyledSlider className={className} navArrows>
      <StyledHomeSliderItem number="1">
        <SlideContent>
          <SlideContentTitle>Awesome hosting 1</SlideContentTitle>
          <SlideContentSubtitle>With unlimited features 1</SlideContentSubtitle>
        </SlideContent>
      </StyledHomeSliderItem>

      <StyledHomeSliderItem number="2">
        <SlideContent>
          <SlideContentTitle>Awesome hosting 2</SlideContentTitle>
          <SlideContentSubtitle>With unlimited features 2</SlideContentSubtitle>
        </SlideContent>
      </StyledHomeSliderItem>

      <StyledHomeSliderItem number="3">
        <SlideContent>
          <SlideContentTitle>Awesome hosting 3</SlideContentTitle>
          <SlideContentSubtitle>With unlimited features 3</SlideContentSubtitle>
        </SlideContent>
      </StyledHomeSliderItem>

      <StyledHomeSliderItem number="4">
        <SlideContent>
          <SlideContentTitle>Awesome hosting 4</SlideContentTitle>
          <SlideContentSubtitle>With unlimited features 4</SlideContentSubtitle>
        </SlideContent>
      </StyledHomeSliderItem>
    </StyledSlider>
  </ThemeProvider>
);

HomeSlider.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledHomeSlider = styled(HomeSlider)`
  position: relative;
  height: 570px;

  ${StyledSliderDots} {
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
  }

  ${StyledSliderArrows} {
    position: absolute;
    top: 50%;
    left: calc((100% - 1200px) / 2);
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    transform: translateY(-50%);
    @media screen and (max-width: 1200px) {
      left: 0;
    }

    ${Arrow} {
      padding: 18.5px 18px 16px;
      background: none;
      border: 2px solid rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      transition: border-color 0.2s ease;
      @media screen and (prefers-reduced-motion: reduce) {
        transition: none;
      }
      &:hover,
      &:focus {
        border-color: white;
      }
    }
  }
`;

export default StyledHomeSlider;
