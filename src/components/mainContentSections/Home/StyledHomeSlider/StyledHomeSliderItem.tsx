import React, { ReactNode, useCallback } from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

import { getSingleImage } from '../../../img';

type Resolution = '2048x1152' | '1600x900' | '1280x720' | '720x1280' | '540x960';

const getSliderItemBg = (num: number | string, res: Resolution) => {
  return getSingleImage(`home/homeSlider/slide-${num}_${res}`, 'jpg');
};

export interface Props {
  number: number | string;
  children?: ReactNode;
  className?: string;
}

// TODO: Add lazy loading for background images
const HomeSliderItem: React.FC<Props> = ({ number, children, className }) => {
  const getSliderItem = useCallback(
    (res: Resolution) => (
      <div
        className={className}
        style={{ backgroundImage: `url(${getSliderItemBg(number, res)})` }}
      >
        {children}
      </div>
    ),
    [number, children, className]
  );

  return (
    <>
      <MediaQuery minDeviceWidth={1600.1}>{getSliderItem('2048x1152')}</MediaQuery>
      <MediaQuery minDeviceWidth={1250.1} maxDeviceWidth={1600}>
        {getSliderItem('1600x900')}
      </MediaQuery>
      <MediaQuery minDeviceWidth={700.1} maxDeviceWidth={1250}>
        {getSliderItem('1280x720')}
      </MediaQuery>
      <MediaQuery minDeviceWidth={500.1} maxDeviceWidth={700}>
        {getSliderItem('720x1280')}
      </MediaQuery>
      <MediaQuery maxDeviceWidth={500}>{getSliderItem('540x960')}</MediaQuery>
    </>
  );
};

const StyledHomeSliderItem = styled(HomeSliderItem)`
  position: relative;
  height: 100%;
  background: center no-repeat;
`;

export { StyledHomeSliderItem };
