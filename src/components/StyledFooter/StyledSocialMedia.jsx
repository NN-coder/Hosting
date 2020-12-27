import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

import StyledFooterSectionTitle from './StyledFooterSectionTitle';

const LinksList = styled.ul`
  display: flex;
  column-gap: 20px;
  a {
    color: var(--text-color);
    transition: color 0.2s ease;
    @media screen and (prefers-reduced-motion: reduce) {
      transition: none;
    }
    &:hover,
    &:focus {
      color: white;
    }
  }
`;

const SocialMedia = ({ className }) => (
  <div className={className}>
    <IconContext.Provider value={{ size: '25px' }}>
      <StyledFooterSectionTitle>Social media</StyledFooterSectionTitle>
      <LinksList>
        <li>
          <a href="/">
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href="/">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="/">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="/">
            <SiTiktok />
          </a>
        </li>
      </LinksList>
    </IconContext.Provider>
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
