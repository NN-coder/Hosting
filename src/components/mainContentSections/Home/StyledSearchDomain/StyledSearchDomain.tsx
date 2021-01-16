import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaSearch } from 'react-icons/fa';

import { StyledWrapper } from '../../../StyledWrapper';
import { StyledStandardSectionTitle } from '../../../StyledStandardSectionTitle';
import { StandardBtn } from '../../../StandardBtn';
import { getSingleImage } from '../../../img';

const SearchDomainWrapper = styled(StyledWrapper)`
  display: flex;
  column-gap: 30px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
  }
`;
const SearchDomainForm = styled.form`
  display: flex;
  width: 100%;
  font-size: 1.35rem;
  column-gap: 10px;

  @media screen and (max-width: 950px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const SearchDomainFormItem = styled.div`
  height: 55px;
  padding-left: 20px;
  color: var(--text-color);
  letter-spacing: 0.01em;
  background-color: white;
  border: 1px solid #dfeef3;
`;

const SearchDomainFormInput = styled(SearchDomainFormItem)`
  grid-column: 1 / -1;
  width: 100%;
`;
const SearchDomainFormSelect = styled(SearchDomainFormItem)`
  min-width: 165px;
  background-image: url(${getSingleImage('home/select-bg', 'png')});
  background-repeat: no-repeat;
  background-position: right 15px center;
  appearance: none;

  @media screen and (max-width: 950px) {
    width: 165px;
    &:first-of-type {
      justify-self: right;
    }
  }
  @media screen and (max-width: 600px) {
    &:first-of-type {
      justify-self: center;
    }
  }
`;
const SearchDomainFormSubmit = styled(StandardBtn)`
  grid-column: 1 / -1;
  justify-self: center;
  min-width: 195px;
  font-weight: 700;
  letter-spacing: 0.1em;
`;

const image = (
  <IconContext.Provider value={{ size: '25px' }}>
    <FaSearch />
  </IconContext.Provider>
);

export interface Props {
  className?: string;
}

const SearchDomain: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <SearchDomainWrapper>
      <StyledStandardSectionTitle rowOne="Search your" rowTwo="Domain" beforeImg={image} />

      <SearchDomainForm action="" method="post">
        <SearchDomainFormInput
          as="input"
          name="name"
          type="text"
          placeholder="Enter your domain name"
        />

        <SearchDomainFormSelect as="select" defaultValue="placeholder" name="years">
          <option value="placeholder" disabled hidden>
            Years (0-1 year)
          </option>
          <option value="0">0 years</option>
          <option value="1">1 year</option>
        </SearchDomainFormSelect>

        <SearchDomainFormSelect as="select" name="domain">
          <option value="com">.com</option>
          <option value="net">.net</option>
          <option value="org">.org</option>
        </SearchDomainFormSelect>

        <SearchDomainFormSubmit type="submit">Search</SearchDomainFormSubmit>
      </SearchDomainForm>
    </SearchDomainWrapper>
  </div>
);

const StyledSearchDomain = styled(SearchDomain)`
  padding: 70px 0;
  background-color: var(--blue);
`;

export { StyledSearchDomain };
