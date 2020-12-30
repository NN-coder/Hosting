import React from 'react';
import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';

import HeaderNav, { MainNavLink } from './HeaderNav';

const MainMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 300px;
  height: 100%;
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
    transition: all 0.2s ease;
    &:hover,
    &:focus,
    &.active {
      color: white;
      background: var(--header-elements-color);
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

export interface Props {
  isClosed: boolean;
  toggleOpen: () => void;
}

const MainNav: React.FC<Props> = ({ isClosed, toggleOpen }) => {
  if (isClosed) return null;

  return (
    <>
      <MainMenu>
        <CloseBtn type="button" onClick={toggleOpen}>
          <CgClose />
        </CloseBtn>
        <HeaderNav handleClick={toggleOpen} />
      </MainMenu>
      <MainMenuBg onClick={toggleOpen} />
    </>
  );
};

export default MainNav;
