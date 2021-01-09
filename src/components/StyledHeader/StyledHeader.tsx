import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { CgMenu } from 'react-icons/cg';

import { StyledWrapper } from '../StyledWrapper';
import { StyledLogo } from '../StyledLogo';
import { StyledHeaderLogin } from './StyledHeaderLogin';
import { DesktopNav } from './DesktopNav';
import { StyledMobileMenu } from './StyledMobileMenu';

const HeaderWrapper = styled(StyledWrapper)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 25px;
`;
const HeaderLogo = styled(StyledLogo)`
  margin-left: 20px;
`;

const MobileMenuOpener = styled.button.attrs({
  type: 'button',
})`
  margin-left: 20px;
  background: none;
  border: none;
`;

export interface Props {
  className?: string;
}

// TODO: Make the header pop up when scrolling up on a mobile device
const Header: React.FC<Props> = ({ className }) => {
  const [isMobileMenuClosed, setMobileMenuClosed] = useState(true);

  return (
    <IconContext.Provider value={{ size: '30px', color: 'var(--header-elements-color)' }}>
      <header className={className}>
        <HeaderWrapper>
          <MediaQuery maxDeviceWidth={950}>
            <MobileMenuOpener onClick={() => setMobileMenuClosed(false)}>
              <CgMenu />
            </MobileMenuOpener>
            <HeaderLogo />
            <StyledHeaderLogin isMobile />
            <StyledMobileMenu
              isClosed={isMobileMenuClosed}
              close={() => setMobileMenuClosed(true)}
            />
          </MediaQuery>

          <MediaQuery minDeviceWidth={950.1}>
            <HeaderLogo />
            <StyledHeaderLogin />
            <DesktopNav />
          </MediaQuery>
        </HeaderWrapper>
      </header>
    </IconContext.Provider>
  );
};

const StyledHeader = styled(Header)`
  z-index: 10;
  padding-top: 20px;
  background-color: white;
  transition: 0.3s;

  @media (max-width: 950px) {
    padding: 20px 0;
  }
`;

export { StyledHeader };
