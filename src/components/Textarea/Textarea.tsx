import { FormEventHandler, forwardRef, useRef, useState } from 'react';

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
      isAutoHeight,
      isClearable = true,
      isRequired,
      validateMessage,
      label,
      message,
      onBlur,
      onFocus,
      leftSlot,
      rightSlot,
      onInput,
      rows,
      style,
      footerSlot,
      semantics,
      ...rest
    },
    textAreaRef
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [setRef, ref] = useForkForwardedRef<HTMLTextAreaElement>(textAreaRef);
    const [resizeRows, setRows] = useState<number>(null);
    const { isFocused, ...focusState } = useControlledFocus({ onFocus, onBlur, ref });

    const handleInput: FormEventHandler<HTMLTextAreaElement> = event => {
      if (isAutoHeight) {
        const rowCount = event.currentTarget.value.split('\n').length;
        setRows(rowCount + 1);
      }
      onInput?.(event);
    };

    const textAreaProps = {
      ref: setRef,
      ...rest,
      ...focusState,
      value,
      disabled,
      onInput: handleInput,
      style,
      rows: resizeRows || rows,
    };

    return (
      <TextFieldBox<HTMLTextAreaElement>
        fieldRef={ref}
        containerRef={containerRef}
        className={combineClassNames(className, TEXTAREA_CN)}
        footerSlot={footerSlot}
        isClearable={Boolean(value && isClearable)}
        isDisabled={disabled}
        {...{
          label,
          isRequired,
          validate,
          isFocused,
          leftSlot,
          rightSlot,
          validateMessage,
          message,
          boxStyle,
          semantics,
        }}
      >
        {isResizable ? (
          <ResizeContainer fieldRef={ref} isDisabled={disabled}>
            {height => <StyledTextarea {...textAreaProps} style={{ ...textAreaProps.style, height }} />}
          </ResizeContainer>
        ) : (
          <StyledTextarea {...textAreaProps} />
        )}
      </TextFieldBox>
    );
  }
);

Textarea.displayName = 'Textarea';
