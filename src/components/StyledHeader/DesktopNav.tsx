import styled from 'styled-components/macro';

import { MainNav, MainNavLink } from './MainNav';

const DesktopNav = styled(MainNav)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  ${MainNavLink} {
    justify-content: center;
    width: 10%;
    height: 55px;
    color: white;
    background-color: var(--accent-color);
    &:hover,
    &:focus,
    &.active {
      background-color: var(--accent-color-active);
    }

    @media screen and (max-width: 1150px) {
      width: 20%;
    }
  }
`;

export { DesktopNav };
