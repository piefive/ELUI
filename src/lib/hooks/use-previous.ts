import { useRef } from 'react';

import { useMount } from './use-mount';

export const usePrevious = <T>(state: T): T | undefined => {
  const ref = useRef<T>();

  useMount(() => {
    ref.current = state;
  });

  return ref.current;
};
