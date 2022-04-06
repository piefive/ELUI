import { useEffect, useRef } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export const bindScrollable = {
  ['data-scroll-lock-scrollable']: undefined as undefined,
} as const;

export const useScrollLock = <T extends HTMLElement = HTMLDivElement>(isLocked?: boolean) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;

    if (isLocked && element) disablePageScroll(element);

    return () => {
      if (element) enablePageScroll(element);
    };
  }, [isLocked]);

  return ref;
};
