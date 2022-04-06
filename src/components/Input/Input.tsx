import { forwardRef } from 'react';

import { TextFieldBox } from 'internal';
import { combineClassNames, useControlledFocus, useForkForwardedRef } from 'lib';

import type { IInputFieldWithMask, TInput } from './types';
import { INPUT_CN } from './constants';
import { useControlledInputType } from './hooks';
import { createChangeEvent } from './utils';
import { MaskInput, PasswordIcon } from './units';
import { StyledInput } from './styled';

export const Input = forwardRef<HTMLInputElement, TInput>(
  (
    {
      className,
      message,
      type = 'text',
      label,
      isRequired,
      boxStyle,
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
      onComplete,
      onChange,
      ...rest
    },
    inputRef
  ) => {
    const [setRef, ref] = useForkForwardedRef<HTMLInputElement>(inputRef);
    const { isFocused: isInputFocused, ...focusState } = useControlledFocus({ onFocus, onBlur, isFocused, ref });
    const [inputType, setInputType] = useControlledInputType(type);
    const isPasswordInput = type === 'password';

    const { maskOptions, ...props } = rest as IInputFieldWithMask;
    const inputProps = { ...props, ...focusState, type: inputType, disabled, value };

    return (
      <TextFieldBox<HTMLInputElement>
        fieldRef={ref}
        className={combineClassNames(className, INPUT_CN)}
        isClearable={Boolean(value && isClearable)}
        isDisabled={disabled}
        isFocused={isInputFocused}
        rightSlot={
          <>
            {rightSlot}
            {isPasswordInput && <PasswordIcon {...{ inputType, setInputType }} />}
          </>
        }
        {...{ label, isRequired, validate, leftSlot, validateMessage, message, boxStyle }}
      >
        {maskOptions ? (
          <MaskInput inputRef={setRef} {...{ maskOptions, onComplete, onChange, ...inputProps }} />
        ) : (
          <StyledInput ref={setRef} {...inputProps} onChange={createChangeEvent(onChange, onComplete)} />
        )}
      </TextFieldBox>
    );
  }
);

Input.displayName = 'Input';
