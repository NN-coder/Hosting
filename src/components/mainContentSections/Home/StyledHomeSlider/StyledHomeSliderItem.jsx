import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import lozadObserver from '../../../lozadObserver';

const images = require.context('./img');
const getImagePath = (name) => images(name).default;

function handleMediaQueryChange() {
  lozadObserver.observe();
}

const HomeSliderItem = ({ number, className, children }) => (
  <>
    <MediaQuery maxDeviceWidth={550} onChange={handleMediaQueryChange}>
      <div
        className={`lozad ${className}`}
        data-background-image={getImagePath(`./slide-${number}_540x960.jpg`)}
      >
        {children}
      </div>
    </MediaQuery>
    <MediaQuery minDeviceWidth={550.1} maxDeviceWidth={750} onChange={handleMediaQueryChange}>
      <div
        className={`lozad ${className}`}
        data-background-image={getImagePath(`./slide-${number}_720x1280.jpg`)}
      >
        {children}
      </div>
    </MediaQuery>
    <MediaQuery minDeviceWidth={750.1} maxDeviceWidth={1200} onChange={handleMediaQueryChange}>
      <div
        className={`lozad ${className}`}
        data-background-image={getImagePath(`./slide-${number}_1280x720.jpg`)}
      >
        {children}
      </div>
    </MediaQuery>
    <MediaQuery minDeviceWidth={1200.1} maxDeviceWidth={1600} onChange={handleMediaQueryChange}>
      <div
        className={`lozad ${className}`}
        data-background-image={getImagePath(`./slide-${number}_1600x900.jpg`)}
      >
        {children}
      </div>
    </MediaQuery>
    <MediaQuery minDeviceWidth={1600.1} onChange={handleMediaQueryChange}>
      <div
        className={`lozad ${className}`}
        data-background-image={getImagePath(`./slide-${number}_2048x1152.jpg`)}
      >
        {children}
      </div>
    </MediaQuery>
  </>
);

HomeSliderItem.propTypes = {
  number: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

const StyledHomeSliderItem = styled(HomeSliderItem)`
  position: relative;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export default StyledHomeSliderItem;
