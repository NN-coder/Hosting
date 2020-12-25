import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StandardBtn from './StandardBtn';
import StyledFormItem from './StyledFormItem';

const StandardFormInput = styled(StyledFormItem)`
  @media (max-width: 800px) {
    grid-column: 1 / -1;
  }
`;
const StandardFormSubjectInput = styled(StyledFormItem)`
  grid-column: 1 / -1;
`;
const StandardFormQuestionsInput = styled(StyledFormItem)`
  grid-row: span 3;
  grid-column: 1 / -1;
`;

const StandardFormSubmit = styled(StandardBtn)`
  grid-column: 1 / -1;
  width: 160px;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.1em;

  @media (max-width: 800px) {
    justify-self: center;
  }
`;

const StandardForm = ({ name, action, method, className, handleSubmit }) => (
  <form name={name} action={action} method={method} onSubmit={handleSubmit} className={className}>
    <StandardFormInput
      inputAs="input"
      inputType="text"
      inputName="name"
      placeholder="Name"
      isRequired
    />
    <StandardFormInput
      inputAs="input"
      inputType="email"
      inputName="email"
      placeholder="Email"
      isRequired
    />
    <StandardFormSubjectInput
      inputAs="input"
      inputType="text"
      inputName="subject"
      placeholder="Subject"
      isRequired
    />
    <StandardFormQuestionsInput
      inputAs="textarea"
      inputName="questions"
      placeholder="Ask your questions here"
      isRequired
    />
    <StandardFormSubmit type="submit">Submit</StandardFormSubmit>
  </form>
);

StandardForm.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
};
StandardForm.defaultProps = {
  handleSubmit: null,
};

const StyledStandardForm = styled(StandardForm)`
  display: grid;
  grid-auto-rows: 60px;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  margin-top: 35px;
  column-gap: 30px;
  row-gap: 10px;
`;

export default StyledStandardForm;
