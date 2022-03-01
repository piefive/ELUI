import { FocusEventHandler, MutableRefObject, useState } from 'react';
import type { U } from 'ts-toolbelt';

import { useUpdateEffect } from 'lib';

import type { IInput } from '../types';

interface IInputControlledState extends Pick<IInput, 'onFocus' | 'onBlur' | 'isFocused'> {
  inputRef: MutableRefObject<U.Nullable<HTMLInputElement>>;
}

export const useInputFocus = ({ inputRef, onFocus, onBlur, isFocused }: IInputControlledState) => {
  const [isInputFocused, setInputFocus] = useState(Boolean(isFocused));

  const onControlledFocus: FocusEventHandler<HTMLInputElement> = event => {
    onFocus?.(event);
    setInputFocus(true);
  };

  const onControlledBlur: FocusEventHandler<HTMLInputElement> = event => {
    onBlur?.(event);
    setInputFocus(false);
  };

  useUpdateEffect(() => {
    if (isFocused) inputRef.current?.focus();
  }, [isFocused]);

  return {
    isInputFocused,
    onFocus: onControlledFocus,
    onBlur: onControlledBlur,
  };
};
