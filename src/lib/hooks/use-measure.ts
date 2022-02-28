import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { ResizeObserver } from '@juggle/resize-observer';

import { useMountedState } from './use-mounted-state';
import { useWindowSize } from './use-window-size';

const DEFAULT_DIMENSIONS = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
  scrollWidth: 0,
  scrollHeight: 0,
};

export const useMeasure = <T extends HTMLElement = HTMLDivElement>(
  useScrollListener?: boolean,
  trigger?: unknown
): [RefObject<T>, typeof DEFAULT_DIMENSIONS, () => void] => {
  const ref = useRef<T>(null);
  const isMounted = useMountedState();
  const [dimensions, setDimensions] = useState(DEFAULT_DIMENSIONS);
  const { width: windowWidth } = useWindowSize();

  const callback = useCallback(() => {
    if (ref.current) {
      const { scrollWidth, scrollHeight } = ref.current;
      const { width, height, top, left, bottom, right } = ref.current.getBoundingClientRect();

      if (isMounted())
        setDimensions({
          width,
          height,
          scrollWidth,
          scrollHeight,
          top,
          bottom,
          left,
          right,
        });
    }
  }, [isMounted]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(callback);

    const element = ref.current;

    if (element) resizeObserver.observe(element);

    if (useScrollListener)
      window.addEventListener('scroll', callback, {
        capture: true,
        passive: true,
      });

    return () => {
      resizeObserver.disconnect();

      if (useScrollListener) window.removeEventListener('scroll', callback);
    };
  }, [windowWidth, useScrollListener, callback, trigger]);

  return [ref, dimensions, callback];
};
