/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import Svg from '../../Svg';
import HeaderNav from '../HeaderNav/HeaderNav';
import './MainMenu.scss';

const MainNav = ({ isClosed, toggleOpen }) => {
  if (isClosed) return null;

  return (
    <>
      <div className="main-menu">
        <button className="main-menu__close-btn" type="button" onClick={toggleOpen}>
          <Svg width="25px" height="25px" viewBox="0 0 357 357" fill="#161920">
            <g id="close">
              <polygon
                points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
			      214.2,178.5"
              />
            </g>
          </Svg>
        </button>
        <HeaderNav onClick={toggleOpen} />
      </div>
      <div onClick={toggleOpen} className="main-menu__bg" />
    </>
  );
};

MainNav.propTypes = {
  isClosed: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default MainNav;
