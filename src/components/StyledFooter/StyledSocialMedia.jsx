import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Svg from '../Svg';
import StyledFooterSectionTitle from './StyledFooterSectionTitle';

const LinksList = styled.ul`
  display: flex;
  column-gap: 20px;
`;
const LinksListItem = styled(Svg).attrs({
  ariaHidden: false,
  width: '25px',
  height: '25px',
})`
  transition: fill 0.2s ease;
  fill: var(--text-color);
  @media screen and (prefers-reduced-motion: reduce) {
    transition: none;
  }
  &:hover,
  &:focus {
    fill: white;
  }
`;

const SocialMedia = ({ className }) => (
  <div className={className}>
    <StyledFooterSectionTitle>Social media</StyledFooterSectionTitle>
    <LinksList>
      <li>
        <a href="/">
          <LinksListItem viewBox="0 0 155 155">
            <g>
              <path
                id="f_1_"
                d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184
		            c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452
		            v20.341H37.29v27.585h23.814v70.761H89.584z"
              />
            </g>
          </LinksListItem>
        </a>
      </li>
      <li>
        <a href="/">
          <LinksListItem>
            <g>
              <path
                d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
                c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
                c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
                c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
                c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
                c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
                C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
                C480.224,136.96,497.728,118.496,512,97.248z"
              />
            </g>
          </LinksListItem>
        </a>
      </li>
      <li>
        <a href="/">
          <LinksListItem>
            <g>
              <path
                d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160
                C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48
                h192c61.76,0,112,50.24,112,112V352z"
              />
            </g>
            <g>
              <path
                d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336
			          c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"
              />
            </g>
            <g>
              <circle cx="393.6" cy="118.4" r="17.056" />
            </g>
          </LinksListItem>
        </a>
      </li>
      <li>
        <a href="/">
          <LinksListItem>
            <g>
              <path
                d="m480.32 128.39c-29.22 0-56.18-9.68-77.83-26.01-24.83-18.72-42.67-46.18-48.97-77.83-1.56-7.82-2.4-15.89-2.48-24.16h-83.47v228.08l-.1
                124.93c0 33.4-21.75 61.72-51.9 71.68-8.75 2.89-18.2 4.26-28.04 3.72-12.56-.69-24.33-4.48-34.56-10.6-21.77-13.02-36.53-36.64-36.93-63.66-.63-42.23
                33.51-76.66 75.71-76.66 8.33 0 16.33 1.36 23.82 3.83v-62.34-22.41c-7.9-1.17-15.94-1.78-24.07-1.78-46.19 0-89.39 19.2-120.27 53.79-23.34 26.14-37.34
                59.49-39.5 94.46-2.83 45.94 13.98 89.61 46.58 121.83 4.79 4.73 9.82 9.12 15.08 13.17 27.95 21.51 62.12 33.17 98.11 33.17 8.13 0 16.17-.6 24.07-1.77
                33.62-4.98 64.64-20.37 89.12-44.57 30.08-29.73 46.7-69.2 46.88-111.21l-.43-186.56c14.35 11.07 30.04 20.23 46.88 27.34 26.19 11.05 53.96 16.65 82.54
                16.64v-60.61-22.49c.02.02-.22.02-.24.02z"
              />
            </g>
          </LinksListItem>
        </a>
      </li>
    </LinksList>
  </div>
);

SocialMedia.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledSocialMedia = styled(SocialMedia)`
  @media (max-width: 1100px) {
    order: -1;
  }
`;

export default StyledSocialMedia;