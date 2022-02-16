import { registerPaintWorklet, useMount } from 'lib';

export const usePaintWorklet = (paintWorkletsPath = './paint-worklets') => {
  useMount(() => {
    const enableWorklets = ['smooth-corners.js'];

    for (const paintWorklet of enableWorklets) registerPaintWorklet(`${paintWorkletsPath}/${paintWorklet}`);
  });
};
