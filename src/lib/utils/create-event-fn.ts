import type { SyntheticEvent } from 'react';

type TEventFnOptions = {
  isPreventDefault?: boolean;
  isStopPropagation?: boolean;
};

export const DEFAULT_OPTIONS: TEventFnOptions = {
  isPreventDefault: true,
  isStopPropagation: true,
};

export const createEventFn =
  <Event extends SyntheticEvent = SyntheticEvent>(fn?: (event: Event) => unknown, options?: TEventFnOptions) =>
  (event: Event) => {
    const { isPreventDefault, isStopPropagation } = { ...DEFAULT_OPTIONS, ...(options ?? null) };

    if (isPreventDefault) event.preventDefault();

    if (isStopPropagation) event.stopPropagation();

    fn?.(event);
  };
