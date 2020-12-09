import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

import lozadObserver from '../../lozadObserver';
import StyledPromo from './StyledPromo';

const images = require.context('./img');
const getImagePath = (name) => images(name).default;

function handleMediaQueryChange() {
  lozadObserver.observe();
}

const MainContentSectionPromo = ({ sectionName, titleRowOne, titleRowTwo }) => (
  <>
    <MediaQuery maxDeviceWidth={550} onChange={handleMediaQueryChange}>
      <StyledPromo
        rowOne={titleRowOne}
        rowTwo={titleRowTwo}
        bg={getImagePath(`./${sectionName}_540x960.jpg`)}
      />
    </MediaQuery>
    <MediaQuery minDeviceWidth={550.1} maxDeviceWidth={750} onChange={handleMediaQueryChange}>
      <StyledPromo
        rowOne={titleRowOne}
        rowTwo={titleRowTwo}
        bg={getImagePath(`./${sectionName}_720x1280.jpg`)}
      />
    </MediaQuery>
    <MediaQuery minDeviceWidth={750.1} maxDeviceWidth={1200} onChange={handleMediaQueryChange}>
      <StyledPromo
        rowOne={titleRowOne}
        rowTwo={titleRowTwo}
        bg={getImagePath(`./${sectionName}_1280x720.jpg`)}
      />
    </MediaQuery>
    <MediaQuery minDeviceWidth={1200.1} maxDeviceWidth={1600} onChange={handleMediaQueryChange}>
      <StyledPromo
        rowOne={titleRowOne}
        rowTwo={titleRowTwo}
        bg={getImagePath(`./${sectionName}_1600x900.jpg`)}
      />
    </MediaQuery>
    <MediaQuery minDeviceWidth={1600.1} onChange={handleMediaQueryChange}>
      <StyledPromo
        rowOne={titleRowOne}
        rowTwo={titleRowTwo}
        bg={getImagePath(`./${sectionName}_2048x1152.jpg`)}
      />
    </MediaQuery>
  </>
);

MainContentSectionPromo.propTypes = {
  sectionName: PropTypes.string.isRequired,
  titleRowOne: PropTypes.string.isRequired,
  titleRowTwo: PropTypes.string.isRequired,
};

export default MainContentSectionPromo;
