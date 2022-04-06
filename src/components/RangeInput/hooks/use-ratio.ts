import { useState } from 'react';

import { useUpdateEffect } from 'lib/hooks';

import { getComputedRatio } from '../utils';

export const useRatio = (min: number, max: number, value: number) => {
  const [ratio, setRatio] = useState(() => getComputedRatio(min, max, value));

  useUpdateEffect(() => {
    setRatio(getComputedRatio(min, max, value));
  }, [min, max, value]);

  return ratio;
};
