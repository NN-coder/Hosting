import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';

import { MainNav, MainNavLink } from './MainNav';

const MobileMenuInner = styled.div`
  width: 300px;
  height: 100%;
  background-color: white;
`;

const MobileNav = styled(MainNav)`
  ${MainNavLink} {
    width: 100%;
    height: 40px;
    padding-left: 30px;
    color: var(--header-elements-color);
    font-weight: 500;
    background: none;
    &:hover,
    &:focus,
    &.active {
      color: white;
      background: var(--header-elements-color);
    }
  }
`;

const MobileMenuBg = styled.div`
  position: absolute;
  top: 0;
  left: 300px;
  width: calc(100% - 300px);
  height: 100%;
  background-color: rgba(14, 42, 71, 0.9);
`;
const CloseBtn = styled.button.attrs({ type: 'button' })`
  margin: 20px;
  background: none;
  border: none;
`;

export interface Props {
  close: () => void;
  isClosed: boolean;
  className?: string;
}

const MobileMenu: React.FC<Props> = ({ className, isClosed, close }) => {
  const handleEscPress = useCallback(
    ({ key }: KeyboardEvent) => (key === 'Escape' ? close() : null),
    [close]
  );

  useEffect(() => {
    if (!isClosed) {
      document.addEventListener('keyup', handleEscPress);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keyup', handleEscPress);
      document.body.style.overflow = '';
    };
  }, [isClosed, handleEscPress]);

  if (isClosed) return null;

  return (
    <div className={className}>
      <MobileMenuInner>
        <CloseBtn onClick={close}>
          <CgClose />
        </CloseBtn>
        <MobileNav handleLinkClick={close} />
      </MobileMenuInner>
      <MobileMenuBg onClick={close} />
    </div>
  );
};

const StyledMobileMenu = styled(MobileMenu)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export { StyledMobileMenu };
