import { forwardRef } from 'react';

import { TextFieldBox } from 'internal';
import { combineClassNames, isFn, useControlledFocus, useForkForwardedRef } from 'lib';

import type { IInputFieldWithMask, IInputFieldWithoutMask, TInput } from './types';
import { INPUT_CN } from './constants';
import { MaskInput } from './units';
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

    const { maskOptions, ...props } = rest as IInputFieldWithMask;
    const inputProps = { ...props, ...focusState, type, disabled, value };

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
          <MaskInput inputRef={setRef} {...{ maskOptions, onComplete, onChange, ...inputProps }} />
        ) : (
          <StyledInput
            ref={setRef}
            {...inputProps}
            onChange={
              onComplete || onChange
                ? event => {
                    onChange?.(event);
                    if (isFn<IInputFieldWithoutMask['onComplete']>(onComplete)) onComplete(event.currentTarget.value);
                  }
                : undefined
            }
          />
        )}
      </TextFieldBox>
    );
  }
);

Input.displayName = 'Input';
