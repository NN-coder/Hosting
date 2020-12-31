import React from 'react';
import styled from 'styled-components';

import StyledStandardSectionTitle from '../../../StyledStandardSectionTitle';
import StyledWrapper from '../../../StyledWrapper';
import StyledFormItem from '../../../StyledFormItem';
import StandardBtn from '../../../StandardBtn';
import selectBg from './select-background.png';

const RegisterDomainForm = styled.form.attrs({
  name: 'register-domain',
  action: '',
  method: 'post',
})`
  display: flex;
  gap: 20px;
  width: 100%;
  margin-top: 35px;
  font-size: 1.4rem;
`;
const RegisterDomainFormInput = styled(StyledFormItem)`
  width: 100%;
`;
const RegisterDomainFormSelect = styled.select`
  min-width: 175px;
  height: 60px;
  padding-left: 20px;
  color: #8d9198;
  background: url(${selectBg}) no-repeat right 15px center;
  background-color: white;
  border: 1px solid #d4e8ee;
  appearance: none;
`;
const SubmitBtn = styled(StandardBtn).attrs({ type: 'submit' })`
  min-width: 175px;
  height: 60px;
  font-weight: 700;
  letter-spacing: 0.1em;
`;

const RegisterDomainWrapper = styled(StyledWrapper)`
  padding: 80px 0 100px;

  @media (max-width: 1250px) {
    padding: 80px 20px 100px;
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    ${RegisterDomainForm} {
      display: contents;
    }
    ${RegisterDomainFormInput} {
      margin-top: 15px;
    }
  }
`;

const RegisterDomain: React.FC = () => (
  <section>
    <RegisterDomainWrapper>
      <StyledStandardSectionTitle rowOne="Register" rowTwo="Domain" />
      <RegisterDomainForm>
        <RegisterDomainFormInput
          inputAs="input"
          type="text"
          name="name"
          placeholder="Domain name"
        />
        <RegisterDomainFormSelect name="domain">
          <option value="com">.com</option>
          <option value="net">.net</option>
          <option value="wiki">.wiki</option>
          <option value="org">.org</option>
        </RegisterDomainFormSelect>
        <SubmitBtn>Register</SubmitBtn>
      </RegisterDomainForm>
    </RegisterDomainWrapper>
  </section>
);

export default RegisterDomain;
