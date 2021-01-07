import React, { useMemo } from 'react';

import { StyledPromo, Backgrounds } from './StyledPromo';
import { getSingleImage } from '../../img';

const getPromoBackground = (name: string, res: string) => {
  return getSingleImage(`mainContentSectionPromo/${name}_${res}`, 'jpg');
};

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
      '540x960': getPromoBackground(sectionName, '540x960'),
      '720x1280': getPromoBackground(sectionName, '720x1280'),
      '1280x720': getPromoBackground(sectionName, '1280x720'),
      '1600x900': getPromoBackground(sectionName, '1600x900'),
      '2048x1152': getPromoBackground(sectionName, '2048x1152'),
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

export { MainContentSectionPromo };
