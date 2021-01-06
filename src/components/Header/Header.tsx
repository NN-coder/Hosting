import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { CgMenu } from 'react-icons/cg';

import { StyledWrapper } from '../StyledWrapper';
import { StyledLogo } from '../StyledLogo/StyledLogo';
import { StyledHeaderLogin } from './StyledHeaderLogin';
import { HeaderNav } from './HeaderNav';
import { MainMenu } from './MainMenu';

const HeaderWrapper = styled(StyledWrapper)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 20px;
  row-gap: 25px;

  @media screen and (max-width: 950px) {
    padding-bottom: 20px;
  }
`;
const MainNavOpener = styled.button`
  margin-left: 20px;
  background: none;
  border: none;
`;

// TODO: Make the header pop up when scrolling up on a mobile device
const Header: React.FC = () => {
  const mql = window.matchMedia('(max-width: 950px)');

  const [mobileMode, changeMode] = useState(mql.matches);
  const [isMainNavClosed, toggleMainNavClose] = useState(true);

  const handleMediaQueryChange = useCallback((event: MediaQueryListEvent) => {
    changeMode(event.matches);
    toggleMainNavClose(true);
  }, []);

  useEffect(() => {
    mql.addEventListener('change', handleMediaQueryChange);
    return () => mql.removeEventListener('change', handleMediaQueryChange);
  }, [mql, handleMediaQueryChange]);

  return (
    <header>
      <IconContext.Provider value={{ size: '30px', color: 'var(--header-elements-color)' }}>
        <HeaderWrapper>
          {mobileMode && (
            <MainNavOpener type="button" onClick={() => toggleMainNavClose(!isMainNavClosed)}>
              <CgMenu />
            </MainNavOpener>
          )}
          <StyledLogo />
          <StyledHeaderLogin isMobile={mobileMode} />
          {mobileMode && (
            <MainMenu
              isClosed={isMainNavClosed}
              toggleOpen={() => toggleMainNavClose((mainNavStatus) => !mainNavStatus)}
            />
          )}
          {!mobileMode && <HeaderNav />}
        </HeaderWrapper>
      </IconContext.Provider>
    </header>
  );
};

export { Header };
