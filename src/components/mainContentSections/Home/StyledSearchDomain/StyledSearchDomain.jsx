import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledWrapper from '../../../StyledWrapper';
import Svg from '../../../Svg';
import StyledStandardSectionTitle from '../../../StyledStandardSectionTitle';
import StandradBtn from '../../../StandardBtn';
import selectBg from './select_bg.png';

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
  background-image: url(${selectBg});
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
const SearchDomainFormSubmit = styled(StandradBtn)`
  grid-column: 1 / -1;
  justify-self: center;
  min-width: 195px;
  font-weight: 700;
  letter-spacing: 0.1em;
`;

const image = (
  <Svg width="25px" height="25px" viewBox="0 0 475 475">
    <g>
      <path
        d="M464.524,412.846l-97.929-97.925c23.6-34.068,35.406-72.047,35.406-113.917c0-27.218-5.284-53.249-15.852-78.087
		    c-10.561-24.842-24.838-46.254-42.825-64.241c-17.987-17.987-39.396-32.264-64.233-42.826
		    C254.246,5.285,228.217,0.003,200.999,0.003c-27.216,0-53.247,5.282-78.085,15.847C98.072,26.412,76.66,40.689,58.673,58.676
		    c-17.989,17.987-32.264,39.403-42.827,64.241C5.282,147.758,0,173.786,0,201.004c0,27.216,5.282,53.238,15.846,78.083
		    c10.562,24.838,24.838,46.247,42.827,64.234c17.987,17.993,39.403,32.264,64.241,42.832c24.841,10.563,50.869,15.844,78.085,15.844
		    c41.879,0,79.852-11.807,113.922-35.405l97.929,97.641c6.852,7.231,15.406,10.849,25.693,10.849
		    c9.897,0,18.467-3.617,25.694-10.849c7.23-7.23,10.848-15.796,10.848-25.693C475.088,428.458,471.567,419.889,464.524,412.846z
		     M291.363,291.358c-25.029,25.033-55.148,37.549-90.364,37.549c-35.21,0-65.329-12.519-90.36-37.549
		    c-25.031-25.029-37.546-55.144-37.546-90.36c0-35.21,12.518-65.334,37.546-90.36c25.026-25.032,55.15-37.546,90.36-37.546
		    c35.212,0,65.331,12.519,90.364,37.546c25.033,25.026,37.548,55.15,37.548,90.36C328.911,236.214,316.392,266.329,291.363,291.358z"
      />
    </g>
  </Svg>
);

const SearchDomain = ({ className }) => (
  <div className={className}>
    <SearchDomainWrapper>
      <StyledStandardSectionTitle rowOne="Search your" rowTwo="Domain" beforeImg={image} />

      <SearchDomainForm action="" method="post">
        <SearchDomainFormInput
          as="input"
          name="name"
          className="search-domain-form__item search-domain-form__input"
          type="text"
          placeholder="Enter your domain name"
        />

        <SearchDomainFormSelect
          as="select"
          defaultValue="placeholder"
          name="years"
          className="search-domain-form__item search-domain-form__select"
        >
          <option value="placeholder" disabled hidden>
            Years (0-1 year)
          </option>
          <option value="0">0 years</option>
          <option value="1">1 year</option>
        </SearchDomainFormSelect>

        <SearchDomainFormSelect
          as="select"
          name="domain"
          className="search-domain-form__item search-domain-form__select"
        >
          <option value="com">.com</option>
          <option value="net">.net</option>
          <option value="org">.org</option>
        </SearchDomainFormSelect>

        <SearchDomainFormSubmit type="submit">Search</SearchDomainFormSubmit>
      </SearchDomainForm>
    </SearchDomainWrapper>
  </div>
);

SearchDomain.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledSearchDomain = styled(SearchDomain)`
  padding: 70px 0;
  background-color: var(--section-bg-blue);

  @media screen and (max-width: 1250px) {
    padding: 70px 20px;
  }
`;

export default StyledSearchDomain;
