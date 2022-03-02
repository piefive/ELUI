import { forwardRef } from 'react';

import { FieldMessage } from 'internal';
import { TStyledComponentsProps, combineClassNames, isBool, useForkForwardedRef, useLastValidState } from 'lib';

import type { IInput } from './types';
import { useInputFocus } from './hooks';
import { INPUT_CN } from './constants';
import { InputLabel } from './units';
import { StyledInput, StyledInputBox, StyledInputWrapper, StyledLeftSlot, StyledValidateMessage } from './styled';
import { InputRightSlot } from './units/InputRightSlot/InputRightSlot';

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
      value,
      leftSlot,
      rightSlot,
      isClearable = true,
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
          {leftSlot && <StyledLeftSlot>{leftSlot}</StyledLeftSlot>}
          <StyledInput ref={setRef} {...rest} {...focusState} {...{ type, disabled, value }} />
          <InputRightSlot inputRef={ref} isClearable={Boolean(value && isClearable)} {...{ rightSlot }} />
        </StyledInputWrapper>
        <StyledValidateMessage {...{ messageStyle }} validate={validateState}>
          {isBool(validate) && validateMessage}
        </StyledValidateMessage>
        <FieldMessage {...{ messageStyle }}>{message}</FieldMessage>
      </StyledInputBox>
    );
  }
);
