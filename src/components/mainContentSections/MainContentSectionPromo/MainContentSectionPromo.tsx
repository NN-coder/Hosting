import React, { useMemo } from 'react';

import StyledPromo, { Backgrounds } from './StyledPromo';

const images = require.context('./img');
const getImagePath = (name: string): string => images(name).default;

export interface Props {
  sectionName: string;
  titleRowOne: string;
  titleRowTwo: string;
  bgPosition: string;
}

const MainContentSectionPromo: React.FC<Props> = ({
  sectionName,
  titleRowOne,
  titleRowTwo,
  bgPosition,
}) => {
  const backgrounds: Backgrounds = useMemo(
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

export default MainContentSectionPromo;
