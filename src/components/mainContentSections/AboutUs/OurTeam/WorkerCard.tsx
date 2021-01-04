import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import LazyImage from '../../../LazyImage';
import { Links } from './workers';

const WorkerCardImg = styled(LazyImage)`
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
  transition: color 0.2s ease;
  &:hover,
  &:focus {
    color: var(--text-color-primary);
  }
`;

export interface Props {
  name: string;
  position: string;
  photo: string;
  links: Links;
}

const WorkerCard: React.FC<Props> = ({ name, position, photo, links }) => {
  const { twitter = '#', instagram = '#', facebook = '#' } = links;

  return (
    <div>
      <WorkerCardImg image={photo} alt={name} />
      <WorkerCardFooter>
        <WorkerCardInfo>
          <WorkerName>{name}</WorkerName>
          <WorkerPosition>{position}</WorkerPosition>
        </WorkerCardInfo>
        <IconContext.Provider value={{ size: '16px' }}>
          <WorkerCardLinks>
            <WorkerLink href={twitter}>
              <FaTwitter />
            </WorkerLink>
            <WorkerLink href={instagram}>
              <FaInstagram />
            </WorkerLink>
            <WorkerLink href={facebook}>
              <FaFacebookF />
            </WorkerLink>
          </WorkerCardLinks>
        </IconContext.Provider>
      </WorkerCardFooter>
    </div>
  );
};

export default WorkerCard;
