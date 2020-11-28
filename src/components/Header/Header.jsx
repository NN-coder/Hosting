import React from 'react';
import styled from 'styled-components';

import StyledWrapper from '../StyledWrapper';
import Svg from '../Svg';
import StyledLogo from '../StyledLogo/StyledLogo';
import StyledHeaderMenu from './StyledHeaderMenu';
import HeaderNav from './HeaderNav';
import MainMenu from './MainMenu';

//* ================================================== Styles ==================================================
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

//* ================================================== Code ==================================================
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.mql = window.matchMedia('screen and (max-width: 950px)');
    this.state = { mobileMode: this.mql.matches, isMainNavClosed: true };
    this.toggleMainNavOpen = this.toggleMainNavOpen.bind(this);
  }

  componentDidMount() {
    this.mql.addEventListener('change', (e) =>
      this.setState({ mobileMode: e.matches, isMainNavClosed: true })
    );
  }

  toggleMainNavOpen() {
    const { isMainNavClosed } = this.state;
    this.setState({ isMainNavClosed: !isMainNavClosed });
  }

  render() {
    const { mobileMode, isMainNavClosed } = this.state;

    return (
      <header>
        <HeaderWrapper>
          {mobileMode && (
            <MainNavOpener type="button" onClick={this.toggleMainNavOpen}>
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
            <MainMenu isClosed={isMainNavClosed} toggleOpen={this.toggleMainNavOpen} />
          )}
          {!mobileMode && <HeaderNav />}
        </HeaderWrapper>
      </header>
    );
  }
}

export default Header;
