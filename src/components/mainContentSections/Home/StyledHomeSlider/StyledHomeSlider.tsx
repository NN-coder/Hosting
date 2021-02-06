import React from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';

import {
  StyledSlider,
  StyledSliderDots,
  StyledSliderArrows,
  Arrow,
} from '../../../StyledSlider/StyledSlider';
import { StyledHomeSliderItem } from './StyledHomeSliderItem';

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
`;
const SlideContentSubtitle = styled.div`
  font-weight: 300;
  font-size: 2rem;
  letter-spacing: 0.095em;
`;

const theme = {
  dotColor: 'var(--accent-color)',
  activeDotColor: '#5278db',
};

export interface Props {
  className?: string;
}

const HomeSlider: React.FC<Props> = ({ className }) => (
  <ThemeProvider theme={theme}>
    <StyledSlider className={className} navArrows>
      <StyledHomeSliderItem number="1">
        <SlideContent>
          <SlideContentTitle>Awesome hosting №1</SlideContentTitle>
          <SlideContentSubtitle>With unlimited features №1</SlideContentSubtitle>
        </SlideContent>
      </StyledHomeSliderItem>

      <StyledHomeSliderItem number="2">
        <SlideContent>
          <SlideContentTitle>Awesome hosting №2</SlideContentTitle>
          <SlideContentSubtitle>With unlimited features №2</SlideContentSubtitle>
        </SlideContent>
      </StyledHomeSliderItem>

      <StyledHomeSliderItem number="3">
        <SlideContent>
          <SlideContentTitle>Awesome hosting №3</SlideContentTitle>
          <SlideContentSubtitle>With unlimited features №3</SlideContentSubtitle>
        </SlideContent>
      </StyledHomeSliderItem>

      <StyledHomeSliderItem number="4">
        <SlideContent>
          <SlideContentTitle>Awesome hosting №4</SlideContentTitle>
          <SlideContentSubtitle>With unlimited features №4</SlideContentSubtitle>
        </SlideContent>
      </StyledHomeSliderItem>
    </StyledSlider>
  </ThemeProvider>
);

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
  }

  ${Arrow} {
    width: 70px;
    height: 70px;
    color: rgba(255, 255, 255, 0.5);
    background: none;
    border: none;
    transition: color 0.2s ease;
    &:hover,
    &:focus {
      color: white;
    }
  }

  @media (max-width: 1200px) {
    ${StyledSliderArrows} {
      left: 0;
    }
  }
  @media (max-width: 600px) {
    ${SlideContentTitle} {
      font-size: 3rem;
    }
    ${SlideContentSubtitle} {
      font-size: 1.5rem;
    }
    ${Arrow} {
      width: 60px;
      height: 60px;
    }
  }
`;

export { StyledHomeSlider };
