import { useState } from 'react';

import { useUpdateEffect } from './use-update-effect';

export const useLastValidState = <State = unknown>(checkedState: State): State | null => {
  const [state, setState] = useState(checkedState);

  useUpdateEffect(() => {
    if (checkedState) setState(checkedState);
  }, [checkedState]);

  return state ?? null;
};
