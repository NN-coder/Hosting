import React from 'react';
import styled from 'styled-components';

import { StyledWrapper } from '../../../StyledWrapper';
import { StyledStandardSectionTitle } from '../../../StyledStandardSectionTitle';
import { StandardBtn } from '../../../StandardBtn';
import { domains } from './domains';

const NewDomainsWrapper = styled(StyledWrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 6px;
`;
const NewDomainsTitle = styled(StyledStandardSectionTitle)`
  margin-bottom: 30px;
`;

const DomainInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0;
  font-size: 1.4rem;
  border-top: 0;
  &:nth-child(n + 4) {
    padding-top: 6px;
    border-top: 1px solid var(--border-color);
  }
`;
const DomainInfoName = styled.p`
  color: var(--text-color);
`;
const DomainInfoBtn = styled(StandardBtn)`
  width: 95px;
  height: 35px;
  text-transform: none;
`;

export interface Props {
  className?: string;
}

const NewDomains: React.FC<Props> = ({ className }) => (
  <section className={className}>
    <NewDomainsWrapper>
      <NewDomainsTitle rowOne="New" rowTwo="Domains" />
      {domains.map((name, num) => (
        // eslint-disable-next-line react/no-array-index-key
        <DomainInfo key={num}>
          <DomainInfoName>{name}</DomainInfoName>
          <DomainInfoBtn>Register</DomainInfoBtn>
        </DomainInfo>
      ))}
    </NewDomainsWrapper>
  </section>
);

const StyledNewDomains = styled(NewDomains)`
  padding-top: 110px;
  padding-bottom: 110px;
  background-color: var(--blue);

  @media (max-width: 1000px) {
    ${NewDomainsTitle} {
      justify-self: center;
    }
  }
  @media (max-width: 900px) {
    ${NewDomainsWrapper} {
      grid-template-columns: 1fr;
    }
    ${DomainInfo} {
      &:nth-child(n + 3) {
        padding-top: 6px;
        border-top: 1px solid var(--border-color);
      }
    }
  }
`;

export { StyledNewDomains };
