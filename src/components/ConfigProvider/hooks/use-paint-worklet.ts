import { useRef } from 'react';

import { registerPaintWorklet, useMount } from 'lib';

export const usePaintWorklet = (paintWorkletsPath = './paint-worklets') => {
  const isLoaded = useRef(false);

  useMount(() => {
    if (!isLoaded.current) {
      const enableWorklets = ['smooth-corners.js'];

      for (const paintWorklet of enableWorklets) registerPaintWorklet(`${paintWorkletsPath}/${paintWorklet}`);
      isLoaded.current = true;
    }
  });
};
