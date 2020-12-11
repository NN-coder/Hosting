import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Svg from '../../../Svg';

const WorkerCardImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 270px;
  color: #9aaeb7;
  font-weight: 800;
  font-size: 1.4rem;
  background-color: var(--blue);
`;
const WorkerCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const WorkerCardInfo = styled.div`
  font-size: 1.4rem;
  line-height: 18px;
`;
const WorkerName = styled.div`
  color: var(--text-color-primary);
  font-weight: 800;
  letter-spacing: 0.05em;
`;
const WorkerPosition = styled.div`
  color: var(--text-color);
  letter-spacing: 0.01em;
`;

const WorkerCardLinks = styled.div`
  display: flex;
  column-gap: 5px;
`;
const WorkerLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: var(--text-color);
  border: 1px solid currentColor;
  cursor: pointer;
  transition: all 0.2s ease;
  @media screen and (prefers-reduced-motion: reduce) {
    transition: none;
  }
  &:hover,
  &:focus {
    color: var(--text-color-primary);
  }
`;
const WorkerLinkSvg = styled(Svg).attrs({
  width: '16px',
  height: '16px',
  fill: 'currentColor',
})`
  color: inherit;
`;

const WorkerCard = ({ name, position, photo, links }) => {
  const { twitter, instagram, facebook } = links;

  return (
    <div>
      <WorkerCardImg className="lozad" data-src={photo} alt={name} />
      <WorkerCardFooter>
        <WorkerCardInfo>
          <WorkerName>{name}</WorkerName>
          <WorkerPosition>{position}</WorkerPosition>
        </WorkerCardInfo>
        <WorkerCardLinks>
          <WorkerLink href={twitter}>
            <WorkerLinkSvg>
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
            </WorkerLinkSvg>
          </WorkerLink>
          <WorkerLink href={instagram}>
            <WorkerLinkSvg>
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
            </WorkerLinkSvg>
          </WorkerLink>
          <WorkerLink href={facebook}>
            <WorkerLinkSvg viewBox="0 0 155 155">
              <g>
                <path
                  id="f_1_"
                  d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184
		            c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452
		            v20.341H37.29v27.585h23.814v70.761H89.584z"
                />
              </g>
            </WorkerLinkSvg>
          </WorkerLink>
        </WorkerCardLinks>
      </WorkerCardFooter>
    </div>
  );
};

WorkerCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  links: PropTypes.shape({
    twitter: PropTypes.string,
    instagram: PropTypes.string,
    facebook: PropTypes.string,
  }).isRequired,
};

export default WorkerCard;
