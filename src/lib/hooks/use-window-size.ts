import { useEffect } from 'react';

import { isClient } from '../utils';

import { useRafState } from './use-raf-state';

type TWindowDimensions = {
  width: number;
  height: number;
};

export const useWindowSize = (initialWidth = Infinity, initialHeight = Infinity) => {
  const [state, setState] = useRafState<TWindowDimensions>({
    width: isClient() ? window.innerWidth : initialWidth,
    height: isClient() ? window.innerHeight : initialHeight,
  });

  useEffect((): (() => void) | void => {
    const handler = () => setState({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, [setState]);

  return state;
};
