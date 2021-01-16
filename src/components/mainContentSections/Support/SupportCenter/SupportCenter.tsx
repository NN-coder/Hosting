import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import { StyledWrapper } from '../../../StyledWrapper';
import { StyledStandardSectionTitle } from '../../../StyledStandardSectionTitle';
import { StyledFormItem, FormInput, InputLabel } from '../../../StyledFormItem';
import { StandardBtn } from '../../../StandardBtn';
import { getSingleImage } from '../../../img';

const SearchForm = styled.form.attrs({
  action: '',
  method: 'get',
  name: 'support-center-search-form',
})`
  display: flex;
  width: 100%;
`;

const SearchFormInput = styled(StyledFormItem).attrs({
  inputAs: 'input',
  type: 'search',
  name: 'search',
})`
  width: 100%;
  min-height: 60px;
  &:before {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    content: url(${getSingleImage('support/icon', 'svg')});
  }
  ${FormInput} {
    padding: 0 50px;
  }
  ${InputLabel} {
    left: 50px;
  }
`;
const SearchFormSubmit = styled(StandardBtn).attrs({
  type: 'button',
})`
  width: 160px;
  height: 60px;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.1em;
`;

const SupportCenterWrapper = styled(StyledWrapper)`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  padding-bottom: 70px;
  row-gap: 30px;

  @media (max-width: 800px) {
    align-items: center;
  }
  @media (max-width: 600px) {
    ${SearchForm} {
      flex-direction: column;
      align-items: center;
      row-gap: 30px;
    }
  }
`;

const SupportCenter: React.FC = () => (
  <section>
    <SupportCenterWrapper>
      <StyledStandardSectionTitle rowOne="Support" rowTwo="Center" />
      <SearchForm>
        <MediaQuery maxDeviceWidth={600}>
          <SearchFormInput placeholder="Enter search item here" />
        </MediaQuery>
        <MediaQuery minDeviceWidth={600.1}>
          <SearchFormInput placeholder="Have a questions? Enter search item here" />
        </MediaQuery>
        <SearchFormSubmit>Search</SearchFormSubmit>
      </SearchForm>
    </SupportCenterWrapper>
  </section>
);

export { SupportCenter };
