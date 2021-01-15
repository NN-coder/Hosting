import React, { useMemo } from 'react';
import MediaQuery from 'react-responsive';

import { StyledPromo } from './StyledPromo';
import { getSingleImage } from '../../img';

const getPromoBackground = (name: string, resolution: string) => {
  return getSingleImage(`mainContentSectionPromo/${name}_${resolution}`, 'jpg');
};

export interface Backgrounds {
  '540x960': string;
  '720x1280': string;
  '1280x720': string;
  '1600x900': string;
  '2048x1152': string;
}

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
    <>
      <MediaQuery minDeviceWidth={1600.1}>
        <StyledPromo
          rowOne={titleRowOne}
          rowTwo={titleRowTwo}
          bg={backgrounds['2048x1152']}
          bgPosition={bgPosition}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1250.1} maxDeviceWidth={1600}>
        <StyledPromo
          rowOne={titleRowOne}
          rowTwo={titleRowTwo}
          bg={backgrounds['1600x900']}
          bgPosition={bgPosition}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={700.1} maxDeviceWidth={1250}>
        <StyledPromo
          rowOne={titleRowOne}
          rowTwo={titleRowTwo}
          bg={backgrounds['1280x720']}
          bgPosition={bgPosition}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={500.1} maxDeviceWidth={700}>
        <StyledPromo
          rowOne={titleRowOne}
          rowTwo={titleRowTwo}
          bg={backgrounds['720x1280']}
          bgPosition={bgPosition}
        />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={500}>
        <StyledPromo
          rowOne={titleRowOne}
          rowTwo={titleRowTwo}
          bg={backgrounds['540x960']}
          bgPosition={bgPosition}
        />
      </MediaQuery>
    </>
  );
};

export { MainContentSectionPromo };
