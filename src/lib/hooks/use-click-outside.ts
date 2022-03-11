import { RefObject, useEffect } from 'react';

import { off, on } from 'lib/utils';

import { useLatest } from './use-latest';

const EVENTS: Omit<keyof DocumentEventMap, number>[] = ['mousedown', 'touchstart'];

export const useClickOutside = (
  onClickOutside: () => void,
  refs: RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[]
) => {
  const savedCallback = useLatest(onClickOutside);

  useEffect(() => {
    const handler = (event: Event) => {
      const list = Array.isArray(refs) ? refs : [refs];
      let isTarget = false;

      for (const ref of list) {
        const { current: element } = ref;

        if (element && element.contains(event.target as Node)) {
          isTarget = true;
          break;
        }
      }

      if (!isTarget) savedCallback.current();
    };

    for (const eventName of EVENTS) on(document, eventName, handler);

    return () => {
      for (const eventName of EVENTS) off(document, eventName, handler);
    };
  }, [refs, savedCallback]);
};
