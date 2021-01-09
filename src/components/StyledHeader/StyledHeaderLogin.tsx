import React from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

const HeaderLoginBtn = styled.button`
  display: flex;
  align-items: center;
  color: var(--header-elements-color);
  font-weight: 500;
  letter-spacing: 0.01em;
  background: none;
  border: none;
  svg {
    margin-right: 10px;
  }
`;

export interface Props {
  isMobile: boolean;
  className?: string;
}

const HeaderLogin: React.FC<Props> = ({ className, isMobile }) => (
  <div className={className}>
    <HeaderLoginBtn>
      <FaUser />
      {!isMobile && 'Login / Register'}
    </HeaderLoginBtn>
  </div>
);

const StyledHeaderLogin = styled(HeaderLogin)`
  margin: 0 20px 0 auto;
  font-size: 1.5rem;
`;

export { StyledHeaderLogin };
