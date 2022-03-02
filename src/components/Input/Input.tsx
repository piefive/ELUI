import { forwardRef } from 'react';

import { TextFieldBox } from 'internal';
import { combineClassNames, useControlledFocus, useForkForwardedRef } from 'lib';

import type { IInput } from './types';
import { INPUT_CN } from './constants';
import { StyledInput } from './styled';

export const Input = forwardRef<HTMLInputElement, IInput>(
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
      ...rest
    },
    inputRef
  ) => {
    const [setRef, ref] = useForkForwardedRef<HTMLInputElement>(inputRef);
    const { isFocused: isInputFocused, ...focusState } = useControlledFocus({ onFocus, onBlur, isFocused, ref });

    return (
      <TextFieldBox<HTMLInputElement>
        fieldRef={ref}
        className={combineClassNames(className, INPUT_CN)}
        isClearable={Boolean(value && isClearable)}
        isDisabled={disabled}
        isFocused={isInputFocused}
        {...{ label, isRequired, validate, leftSlot, rightSlot, validateMessage, message, boxStyle }}
      >
        <StyledInput ref={setRef} {...rest} {...focusState} {...{ type, disabled, value }} />
      </TextFieldBox>
    );
  }
);

Input.displayName = 'Input';
