import { forwardRef } from 'react';

import { FieldMessage } from 'internal';
import { TStyledComponentsProps, combineClassNames, isBool, useForkForwardedRef, useLastValidState } from 'lib';

import type { IInput } from './types';
import { useInputFocus } from './hooks';
import { INPUT_CN } from './constants';
import { InputLabel } from './units';
import { StyledInput, StyledInputBox, StyledInputWrapper, StyledValidateMessage } from './styled';

export const Input = forwardRef<HTMLInputElement, IInput>(
  (
    {
      className,
      message,
      type = 'text',
      label,
      isRequired,
      inputBoxStyle,
      disabled = false,
      validate = null,
      validateMessage,
      onFocus,
      onBlur,
      isFocused,
      ...rest
    },
    inputRef
  ) => {
    const validateState = useLastValidState(validate, [true, false]);
    const [setRef, ref] = useForkForwardedRef<HTMLInputElement>(inputRef);
    const { isInputFocused, ...focusState } = useInputFocus({ onFocus, onBlur, isFocused, inputRef: ref });

    const onInputFocus = () => ref?.current.focus();

    const messageStyle: TStyledComponentsProps = { display: 'block', paddingTop: 8 };

    return (
      <StyledInputBox className={combineClassNames(className, INPUT_CN)} boxStyle={inputBoxStyle}>
        {label && <InputLabel onLabelClick={onInputFocus} {...{ label, isRequired }} />}
        <StyledInputWrapper onClick={onInputFocus} isDisabled={disabled} isFocused={isInputFocused} {...{ validate }}>
          <StyledInput ref={setRef} {...rest} {...focusState} {...{ type, disabled }} />
        </StyledInputWrapper>
        <StyledValidateMessage {...{ messageStyle }} validate={validateState}>
          {isBool(validate) && validateMessage}
        </StyledValidateMessage>
        <FieldMessage {...{ messageStyle }}>{message}</FieldMessage>
      </StyledInputBox>
    );
  }
);
