/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useCallback, useMemo, useRef, MutableRefObject } from 'react';
import styled, { css } from 'styled-components/macro';

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

interface InputLabelProps {
  isHidden?: boolean;
  isRequired?: boolean;
}

const InputLabel = styled.label<InputLabelProps>`
  position: absolute;
  top: 21px;
  left: 20px;
  cursor: text;
  transition: 0.2s;
  ${({ isHidden }) => (isHidden ? hiddenLabelStyles : '')}
  ${({ isRequired }) => (isRequired ? requiredLabelStyles : '')}
`;
const FormInput = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border: solid 1px var(--border-color);
  resize: none;
`;

type InputOrTextarea = HTMLInputElement | HTMLTextAreaElement;

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

  const handleFocusChange = useCallback((event: React.FocusEvent<InputOrTextarea>) => {
    if (event.target.value.length === 0) {
      toggleLabel((labelStatus) => !labelStatus);
    }
  }, []);

  const [inputValue, changeValue] = useState('');
  const handleChange = useCallback(
    (event: React.ChangeEvent<InputOrTextarea>) => changeValue(event.target.value),
    []
  );

  const formInputProps = useMemo(
    () => ({
      name,
      required: isRequired,
      onChange: handleChange,
      onFocus: handleFocusChange,
      onBlur: handleFocusChange,
    }),
    [name, isRequired, handleChange, handleFocusChange]
  );

  const inputRef = useRef<InputOrTextarea>();

  return (
    <div className={className}>
      {inputAs === 'input' && (
        <FormInput
          as={inputAs}
          ref={inputRef as MutableRefObject<HTMLInputElement>}
          type={type}
          value={inputValue}
          {...formInputProps}
        />
      )}
      {inputAs === 'textarea' && (
        <FormInput
          as={inputAs}
          ref={inputRef as MutableRefObject<HTMLTextAreaElement>}
          value={inputValue}
          {...formInputProps}
        />
      )}
      <InputLabel
        isHidden={isLabelHidden}
        isRequired={isRequired}
        onClick={() => inputRef.current?.focus()}
      >
        {placeholder}
      </InputLabel>
    </div>
  );
};

const StyledFormItem = styled(FormItem)`
  position: relative;
  color: var(--text-color);
  font-size: 1.4rem;
  letter-spacing: 0.01em;
`;

export { StyledFormItem, FormInput, InputLabel };
