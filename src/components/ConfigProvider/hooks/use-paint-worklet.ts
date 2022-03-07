import { useRef } from 'react';

import { registerPaintWorklet, useIsomorphicLayoutEffect } from 'lib';

export const usePaintWorklet = (paintWorklets: string[]) => {
  const loadedWorklets = useRef([]);

  useIsomorphicLayoutEffect(() => {
    if (paintWorklets)
      for (const worklet of paintWorklets)
        if (!loadedWorklets.current.includes(worklet))
          registerPaintWorklet(worklet, 'link').then(
            () => (loadedWorklets.current = [...loadedWorklets.current, worklet])
          );
  });
};
