import { MutableRefObject, useCallback, useRef } from 'react';
import type { U } from 'ts-toolbelt';

import { isFn } from '../utils';

type TForwardedRef<T extends HTMLElement = HTMLDivElement> = ((element: T) => void) | MutableRefObject<T>;

export const useForkForwardedRef = <T extends HTMLElement = HTMLDivElement>(
  forwardedRef: U.Nullable<TForwardedRef<T>>
): [(element: T) => void, MutableRefObject<T | null>] => {
  const forkedRef = useRef<T | null>(null);

  const setRef = useCallback(
    (element: T) => {
      forkedRef.current = element;

      if (forwardedRef) {
        if (isFn(forwardedRef)) forwardedRef(element);
        else forwardedRef.current = element;
      }
    },
    [forwardedRef]
  );

  return [setRef, forkedRef];
};
