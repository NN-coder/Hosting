import React from 'react';
import Slider from '../../../Slider/Slider';
import './HomeSlider.scss';

const HomeSlider = () => (
  <Slider className="home-slider" navArrows>
    <div className="home-slider-item home-slider-item--1">
      <div className="home-slider-content">
        <div className="home-slider-content__title">Awesome hosting 1</div>
        <div className="home-slider-content__subtitle">With unlimited features 1</div>
      </div>
    </div>

    <div className="home-slider-item home-slider-item--2">
      <div className="home-slider-content">
        <div className="home-slider-content__title">Awesome hosting 2</div>
        <div className="home-slider-content__subtitle">With unlimited features 2</div>
      </div>
    </div>

    <div className="home-slider-item home-slider-item--3">
      <div className="home-slider-content">
        <div className="home-slider-content__title">Awesome hosting 3</div>
        <div className="home-slider-content__subtitle">With unlimited features 3</div>
      </div>
    </div>

    <div className="home-slider-item home-slider-item--4">
      <div className="home-slider-content">
        <div className="home-slider-content__title">Awesome hosting 4</div>
        <div className="home-slider-content__subtitle">With unlimited features 4</div>
      </div>
    </div>
  </Slider>
);

export default HomeSlider;
