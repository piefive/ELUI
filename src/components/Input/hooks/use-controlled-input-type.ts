import { useState } from 'react';

import { useUpdateEffect } from 'lib';

import type { TInput } from '../types';

export const useControlledInputType = (type: Required<TInput['type']>) => {
  const state = useState(type);

  useUpdateEffect(() => {
    const [, setInputType] = state;
    setInputType(type);
  }, [type]);

  return state;
};
