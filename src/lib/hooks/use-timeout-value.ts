import { useState } from 'react';

import { useMount } from './use-mount';
import { useMountedState } from './use-mounted-state';

export const useTimeoutValue = <T>(initialValue: T, timeoutValue: T, delay = 0) => {
  const isMounted = useMountedState();
  const state = useState(initialValue);

  useMount(() => {
    const [, setValue] = state;
    setTimeout(() => isMounted() && setValue(timeoutValue), delay);
  });

  return state;
};
