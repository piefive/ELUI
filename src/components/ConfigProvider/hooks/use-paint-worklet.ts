import { useLayoutEffect, useRef } from 'react';

import { registerPaintWorklet } from 'lib';

import figmaSmoothCorners from '../worklets/figma-smooth-corners.txt';

export const usePaintWorklet = (paintWorklets: string[]) => {
  const loadedWorklets = useRef([]);
  const worklets = useRef([
    ...(paintWorklets?.map(worklet => ({ worklet, type: 'link' })) ?? []),
    { worklet: figmaSmoothCorners, type: 'js' },
  ]);

  useLayoutEffect(() => {
    for (const { worklet, type } of worklets.current)
      if (!loadedWorklets.current.includes(worklet))
        registerPaintWorklet(worklet, type as 'link' | 'js').then(
          () => (loadedWorklets.current = [...loadedWorklets.current, worklet])
        );
  });
};
