import { useState } from 'react';
import type { FocusEventHandler, MutableRefObject } from 'react';
import type { U } from 'ts-toolbelt';

import { useUpdateEffect } from './use-update-effect';

type TControlledFocus<Element extends HTMLInputElement | HTMLTextAreaElement> = {
  ref?: MutableRefObject<U.Nullable<Element>>;
  onBlur?: FocusEventHandler<Element>;
  onFocus?: FocusEventHandler<Element>;
  isFocused?: boolean;
};

export const useControlledFocus = <Element extends HTMLInputElement | HTMLTextAreaElement>({
  ref,
  isFocused,
  onFocus,
  onBlur,
}: TControlledFocus<Element>) => {
  const [isInputFocused, setInputFocus] = useState(Boolean(isFocused));

  const onControlledFocus: FocusEventHandler<Element> = event => {
    onFocus?.(event);
    setInputFocus(true);
  };

  const onControlledBlur: FocusEventHandler<Element> = event => {
    onBlur?.(event);
    setInputFocus(false);
  };

  useUpdateEffect(() => {
    if (isFocused) ref?.current?.focus?.();
  }, [isFocused]);

  return {
    isFocused: isInputFocused,
    onFocus: onControlledFocus,
    onBlur: onControlledBlur,
  };
};
