import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import StyledPromo from './StyledPromo';

const images = require.context('./img');
const getImagePath = (name) => images(name).default;

const MainContentSectionPromo = ({ sectionName, titleRowOne, titleRowTwo, bgPosition }) => {
  const backgrounds = useMemo(
    () => ({
      '540x960': getImagePath(`./${sectionName}_540x960.jpg`),
      '720x1280': getImagePath(`./${sectionName}_720x1280.jpg`),
      '1280x720': getImagePath(`./${sectionName}_1280x720.jpg`),
      '1600x900': getImagePath(`./${sectionName}_1600x900.jpg`),
      '2048x1152': getImagePath(`./${sectionName}_2048x1152.jpg`),
    }),
    [sectionName]
  );

  return (
    <StyledPromo
      rowOne={titleRowOne}
      rowTwo={titleRowTwo}
      bgPosition={bgPosition}
      backgrounds={backgrounds}
    />
  );
};

MainContentSectionPromo.propTypes = {
  sectionName: PropTypes.string.isRequired,
  titleRowOne: PropTypes.string.isRequired,
  titleRowTwo: PropTypes.string.isRequired,
  bgPosition: PropTypes.string.isRequired,
};

export default MainContentSectionPromo;
