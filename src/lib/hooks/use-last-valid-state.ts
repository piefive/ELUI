import { useState } from 'react';

import { useUpdateEffect } from './use-update-effect';

export const useLastValidState = <State = unknown>(checkedState: State, validValues?: unknown[]): State | null => {
  const [state, setState] = useState(checkedState);

  useUpdateEffect(() => {
    if (validValues) {
      if (validValues?.includes(checkedState)) setState(checkedState);
    } else if (checkedState) setState(checkedState);
  }, [checkedState]);

  return state ?? null;
};
