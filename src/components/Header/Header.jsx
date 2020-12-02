import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import StyledWrapper from '../StyledWrapper';
import Svg from '../Svg';
import StyledLogo from '../StyledLogo/StyledLogo';
import StyledHeaderMenu from './StyledHeaderMenu';
import HeaderNav from './HeaderNav';
import MainMenu from './MainMenu';

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

const Header = () => {
  const mql = window.matchMedia('(max-width: 950px)');

  const [mobileMode, changeMode] = useState(mql.matches);
  const [isMainNavClosed, toggleMainNavClose] = useState(true);

  const handleMediaQueryChange = useCallback((event) => {
    changeMode(event.matches);
    toggleMainNavClose(true);
  }, []);

  useEffect(() => {
    mql.addEventListener('change', handleMediaQueryChange);
    return () => mql.removeEventListener('change', handleMediaQueryChange);
  }, [mql, handleMediaQueryChange]);

  return (
    <header>
      <HeaderWrapper>
        {mobileMode && (
          <MainNavOpener type="button" onClick={() => toggleMainNavClose(!isMainNavClosed)}>
            <Svg width="25px" height="25px" viewBox="0 0 341 341" fill="#161920">
              <g>
                <g>
                  <rect y="277.333" width="341.333" height="42.667" />
                </g>
              </g>
              <g>
                <g>
                  <rect y="149.333" width="341.333" height="42.667" />
                </g>
              </g>
              <g>
                <g>
                  <rect y="21.333" width="341.333" height="42.667" />
                </g>
              </g>
            </Svg>
          </MainNavOpener>
        )}
        <StyledLogo />
        <StyledHeaderMenu isMobile={mobileMode} />
        {mobileMode && (
          <MainMenu
            isClosed={isMainNavClosed}
            toggleOpen={() => toggleMainNavClose(!isMainNavClosed)}
          />
        )}
        {!mobileMode && <HeaderNav />}
      </HeaderWrapper>
    </header>
  );
};

export default Header;
