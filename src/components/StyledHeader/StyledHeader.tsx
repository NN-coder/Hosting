import React, { useRef, useState, useCallback, useEffect } from 'react';
import styled from 'styled-components/macro';
import { IconContext } from 'react-icons';
import { CgMenu } from 'react-icons/cg';

import { StyledWrapper } from '../StyledWrapper';
import { StyledLogo } from '../StyledLogo';
import { StyledHeaderLogin } from './StyledHeaderLogin';
import { DesktopNav } from './DesktopNav';
import { StyledMobileMenu } from './StyledMobileMenu';
import { SCROLL_UP, SCROLL_DOWN } from '../utils/scrollEvents';

const HeaderWrapper = styled(StyledWrapper)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 25px;
  padding: 0;
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

const Header: React.FC<Props> = ({ className }) => {
  const mediaQuery = window.matchMedia('(max-width:950px)');

  const [mobileMode, setMobileMode] = useState(mediaQuery.matches);
  const [isMobileMenuClosed, setMobileMenuClosed] = useState(true);

  const headerRef = useRef<HTMLElement>(null);

  const handleScrollUp = useCallback(() => {
    const { current: header } = headerRef;

    if (header) {
      header.style.transform = '';
    }
  }, []);

  const handleScrollDown = useCallback(() => {
    const { current: header } = headerRef;

    if (header && header.offsetHeight < window.pageYOffset) {
      header.style.transform = 'translateY(calc(-100% - 15px))';
    }
  }, []);

  const handleMediaQueryChange = useCallback(
    ({ matches }: MediaQueryListEvent) => {
      setMobileMode(matches);
      setMobileMenuClosed(true);

      // Called because the same actions must be performed here
      handleScrollUp();
    },
    [handleScrollUp]
  );

  useEffect(() => {
    if (mobileMode) {
      window.addEventListener(SCROLL_UP, handleScrollUp);
      window.addEventListener(SCROLL_DOWN, handleScrollDown);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      window.removeEventListener(SCROLL_UP, handleScrollUp);
      window.removeEventListener(SCROLL_DOWN, handleScrollDown);
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [mediaQuery, mobileMode, handleScrollUp, handleScrollDown, handleMediaQueryChange]);

  // TODO: When you click on MobileMenuOpener and quickly scroll down, StyledMobileMenu is not displayed correctly. Needs fixing
  // TODO: Add the ability to open and close the mobile menu with swipes
  return (
    <IconContext.Provider value={{ size: '30px', color: 'var(--header-elements-color)' }}>
      <header ref={headerRef} className={className}>
        <HeaderWrapper>
          {mobileMode && (
            <>
              <MobileMenuOpener onClick={() => setMobileMenuClosed(false)}>
                <CgMenu />
              </MobileMenuOpener>
              <StyledMobileMenu
                isClosed={isMobileMenuClosed}
                close={() => setMobileMenuClosed(true)}
              />
            </>
          )}
          <HeaderLogo />
          <StyledHeaderLogin isMobile={mobileMode} />
          {!mobileMode && <DesktopNav />}
        </HeaderWrapper>
      </header>
    </IconContext.Provider>
  );
};

const StyledHeader = styled(Header)`
  position: sticky;
  z-index: 10;
  padding-top: 20px;
  background-color: white;
  transition: 0.3s;

  @media (max-width: 950px) {
    top: 0;
    padding: 20px 0;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
  }
`;

export { StyledHeader };
