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
  inputName: string;
  placeholder: string;
  isRequired?: boolean;
  inputType?: string;
  className?: string;
}

const FormItem: React.FC<Props> = ({
  className,
  inputAs,
  inputType,
  inputName,
  placeholder,
  isRequired,
}) => {
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

  return (
    <div className={className}>
      {inputAs === 'input' && (
        <FormInput
          id={id}
          as={inputAs}
          type={inputType}
          name={inputName}
          required={isRequired}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocusChange}
          onBlur={handleFocusChange}
        />
      )}
      {inputAs === 'textarea' && (
        <FormInput
          id={id}
          as={inputAs}
          name={inputName}
          required={isRequired}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocusChange}
          onBlur={handleFocusChange}
        />
      )}
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
