import { forwardRef, useRef } from 'react';

import { combineClassNames, useControlledFocus, useForkForwardedRef } from 'lib';
import { TextFieldBox } from 'internal';

import type { ITextarea } from './types';
import { TEXTAREA_CN } from './constants';
import { StyledTextarea } from './styled';
import { ResizeContainer } from './units';

export const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
  (
    {
      className,
      value = '',
      boxStyle,
      validate = null,
      disabled = false,
      isResizable = true,
      isClearable = true,
      isRequired,
      validateMessage,
      label,
      message,
      onBlur,
      onFocus,
      leftSlot,
      rightSlot,
      ...rest
    },
    textAreaRef
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [setRef, ref] = useForkForwardedRef<HTMLTextAreaElement>(textAreaRef);
    const { isFocused, ...focusState } = useControlledFocus({ onFocus, onBlur, ref });

    const textAreaProps = {
      ref: setRef,
      ...rest,
      ...focusState,
      value,
      disabled,
    };

    return (
      <TextFieldBox<HTMLTextAreaElement>
        fieldRef={ref}
        containerRef={containerRef}
        className={combineClassNames(className, TEXTAREA_CN)}
        isClearable={Boolean(value && isClearable)}
        isDisabled={disabled}
        {...{ label, isRequired, validate, isFocused, leftSlot, rightSlot, validateMessage, message, boxStyle }}
      >
        {isResizable ? (
          <ResizeContainer fieldRef={ref} isDisabled={disabled}>
            {height => <StyledTextarea style={{ height }} {...textAreaProps} />}
          </ResizeContainer>
        ) : (
          <StyledTextarea {...textAreaProps} />
        )}
      </TextFieldBox>
    );
  }
);

Textarea.displayName = 'Textarea';
