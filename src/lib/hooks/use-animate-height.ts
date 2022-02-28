import { useState } from 'react';
import { useSpring } from 'react-spring';

import { useUpdateEffect } from './use-update-effect';
import { useMeasure } from './use-measure';
import { useWindowSize } from './use-window-size';

export const useAnimateHeight = <T extends HTMLElement = HTMLDivElement>(isExpanded: boolean) => {
  const [ref, { height }] = useMeasure<T>();
  const windowWidth = useWindowSize();
  const [overflow, setOverflow] = useState('hidden');

  const [style, { set }] = useSpring(
    {
      height: isExpanded ? height || 'auto' : 0,
      opacity: isExpanded ? 1 : 0,
      onStart: () => {
        if (!isExpanded) setOverflow('hidden');
      },
      onRest: () => {
        if (isExpanded) setOverflow('visible');
      },
    },
    [isExpanded]
  );

  useUpdateEffect(() => {
    if (isExpanded) set({ height });
  }, [windowWidth, height]);

  return {
    ref,
    style: { ...style, overflow },
  };
};
