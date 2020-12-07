import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Svg from '../Svg';
import HeaderNav, { MainNavLink } from './HeaderNav';

const MainMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 300px;
  height: 100%;
  overflow: scroll;
  background-color: white;

  ${MainNavLink} {
    justify-content: flex-start;
    width: 100%;
    height: 40px;
    padding-left: 30px;
    color: var(--header-elements-color);
    font-weight: 500;
    font-size: 1.4rem;
    text-align: left;
    background: none;
    &:hover,
    &:focus {
      background: none;
    }
  }
`;
const MainMenuBg = styled.div`
  position: fixed;
  top: 0;
  left: 300px;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(14, 42, 71, 0.9);
`;
const CloseBtn = styled.button`
  margin: 20px;
  background: none;
  border: none;
`;

const MainNav = ({ isClosed, toggleOpen }) => {
  if (isClosed) return null;

  return (
    <>
      <MainMenu>
        <CloseBtn type="button" onClick={toggleOpen}>
          <Svg width="25px" height="25px" viewBox="0 0 357 357" fill="var(--header-elements-color)">
            <g id="close">
              <polygon
                points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
			          214.2,178.5"
              />
            </g>
          </Svg>
        </CloseBtn>
        <HeaderNav onClick={toggleOpen} />
      </MainMenu>
      <MainMenuBg onClick={toggleOpen} />
    </>
  );
};

MainNav.propTypes = {
  isClosed: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default MainNav;
