import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const hiddenLabelStyles = css`
  visibility: hidden;
  opacity: 0;
`;
const requiredLabelStyles = css`
  &:after {
    color: var(--accent-color);
    font-size: 1.6rem;
    content: '*';
  }
`;

const QuestionFormLabel = styled.label`
  position: absolute;
  top: 21px;
  left: 20px;
  cursor: text;
  transition: all 0.2s ease;
  ${({ isHidden }) => (isHidden ? hiddenLabelStyles : '')}
  ${({ isRequired }) => (isRequired ? requiredLabelStyles : '')}
`;
const QuestionFormInput = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border: solid 1px #d3e5eb;
  resize: none;
`;

const QuestionFormItem = ({
  className,
  inputAs,
  inputType,
  inputName,
  placeholder,
  isRequired,
}) => {
  const [isLabelHidden, toggleLabel] = useState(false);

  const handleFocusChange = useCallback((event) => {
    if (event.target.value.length === 0) {
      toggleLabel((labelStatus) => !labelStatus);
    }
  }, []);

  const [inputValue, changeValue] = useState('');

  const handleChange = useCallback((event) => changeValue(event.target.value), []);

  const inputRef = React.createRef();

  return (
    <div className={className}>
      <QuestionFormInput
        ref={inputRef}
        as={inputAs}
        type={inputType}
        name={inputName}
        required={isRequired}
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocusChange}
        onBlur={handleFocusChange}
      />
      <QuestionFormLabel
        isHidden={isLabelHidden}
        isRequired={isRequired}
        onClick={() => inputRef.current.focus()}
        onCopy={(event) => event.preventDefault()}
      >
        {placeholder}
      </QuestionFormLabel>
    </div>
  );
};

QuestionFormItem.propTypes = {
  className: PropTypes.string.isRequired,
  inputAs: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  inputName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  isRequired: PropTypes.bool,
};
QuestionFormItem.defaultProps = {
  inputType: null,
  isRequired: false,
};

const StyledQuestionFormItem = styled(QuestionFormItem)`
  position: relative;
  color: var(--text-color);
  font-size: 1.4rem;
  letter-spacing: 0.01em;
  ${({ additionalStyles }) => additionalStyles}
`;

export default StyledQuestionFormItem;
