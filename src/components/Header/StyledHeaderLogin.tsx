import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaUser } from 'react-icons/fa';

const HeaderLoginBtn = styled.button`
  display: flex;
  align-items: center;
  color: var(--header-elements-color);
  letter-spacing: 0.01em;
  background: none;
  border: none;
  svg {
    margin-right: 10px;
  }
`;

const innerText = 'Login / Register';

export interface Props {
  isMobile: boolean;
  className?: string;
}

const HeaderLogin: React.FC<Props> = ({ isMobile, className }) => (
  <div className={className}>
    <HeaderLoginBtn>
      <IconContext.Provider value={{ size: '30px' }}>
        <FaUser />
      </IconContext.Provider>
      {!isMobile && innerText}
    </HeaderLoginBtn>
  </div>
);

const StyledHeaderLogin = styled(HeaderLogin)`
  margin-right: 20px;
  margin-left: auto;
  font-size: 1.5rem;
`;

export default StyledHeaderLogin;
