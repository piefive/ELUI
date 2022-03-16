import { forwardRef } from 'react';

import { MaskInput } from 'components/Input/units';
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
      maskOptions,
      ...rest
    },
    inputRef
  ) => {
    const [setRef, ref] = useForkForwardedRef<HTMLInputElement>(inputRef);
    const { isFocused: isInputFocused, ...focusState } = useControlledFocus({ onFocus, onBlur, isFocused, ref });

    const inputProps = { ...rest, ...focusState, type, disabled, value };

    return (
      <TextFieldBox<HTMLInputElement>
        fieldRef={ref}
        className={combineClassNames(className, INPUT_CN)}
        isClearable={Boolean(value && isClearable)}
        isDisabled={disabled}
        isFocused={isInputFocused}
        {...{ label, isRequired, validate, leftSlot, rightSlot, validateMessage, message, boxStyle }}
      >
        {maskOptions ? (
          <MaskInput inputRef={setRef} {...{ maskOptions, ...inputProps }} />
        ) : (
          <StyledInput ref={setRef} {...inputProps} />
        )}
      </TextFieldBox>
    );
  }
);

Input.displayName = 'Input';
