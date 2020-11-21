import React from 'react';
import Svg from '../Svg';
import Logo from '../Logo/Logo';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderNav from './HeaderNav/HeaderNav';
import MainMenu from './MainMenu/MainMenu';
import './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.mql = window.matchMedia('screen and (max-width:950px)');
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

    if (mobileMode) {
      return (
        <header className="header">
          <div className="wrapper header-wrapper">
            <button className="main-nav-opener" type="button" onClick={this.toggleMainNavOpen}>
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
            </button>
            <Logo />
            <HeaderMenu isMobile={mobileMode} />
            <MainMenu isClosed={isMainNavClosed} toggleOpen={this.toggleMainNavOpen} />
          </div>
        </header>
      );
    }

    return (
      <header className="header">
        <div className="wrapper header-wrapper">
          <Logo />
          <HeaderMenu isMobile={mobileMode} />
          <HeaderNav />
        </div>
      </header>
    );
  }
}

export default Header;
