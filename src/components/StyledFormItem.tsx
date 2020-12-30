/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useCallback, useMemo } from 'react';
import styled, { css } from 'styled-components';
import shortid from 'shortid';

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

const InputLabel = styled.label<{ isHidden?: boolean; isRequired?: boolean }>`
  position: absolute;
  top: 21px;
  left: 20px;
  cursor: text;
  transition: all 0.2s ease;
  ${({ isHidden }) => (isHidden ? hiddenLabelStyles : '')}
  ${({ isRequired }) => (isRequired ? requiredLabelStyles : '')}
`;
const FormInput = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border: solid 1px #d3e5eb;
  resize: none;
`;

export interface Props {
  inputAs: 'input' | 'textarea';
  name: string;
  placeholder: string;
  isRequired?: boolean;
  type?: string;
  className?: string;
}

const FormItem: React.FC<Props> = ({ className, inputAs, type, name, placeholder, isRequired }) => {
  const [isLabelHidden, toggleLabel] = useState(false);

  const handleFocusChange = useCallback(
    (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (event.target.value.length === 0) {
        toggleLabel((labelStatus) => !labelStatus);
      }
    },
    []
  );

  const [inputValue, changeValue] = useState('');
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      changeValue(event.target.value),
    []
  );

  const id = useMemo(() => shortid.generate(), []);

  const formInputProps = useMemo(
    () => ({
      id,
      name,
      required: isRequired,
      onChange: handleChange,
      onFocus: handleFocusChange,
      onBlur: handleFocusChange,
    }),
    [id, name, isRequired, handleChange, handleFocusChange]
  );

  return (
    <div className={className}>
      {inputAs === 'input' && (
        <FormInput as={inputAs} type={type} value={inputValue} {...formInputProps} />
      )}
      {inputAs === 'textarea' && <FormInput as={inputAs} value={inputValue} {...formInputProps} />}
      <InputLabel isHidden={isLabelHidden} isRequired={isRequired} htmlFor={id}>
        {placeholder}
      </InputLabel>
    </div>
  );
};

FormItem.defaultProps = {
  isRequired: false,
};

const StyledFormItem = styled(FormItem)`
  position: relative;
  color: var(--text-color);
  font-size: 1.4rem;
  letter-spacing: 0.01em;
`;

export { StyledFormItem as default, FormInput, InputLabel };
