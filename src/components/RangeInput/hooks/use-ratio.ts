import { useState } from 'react';

import { useUpdateEffect } from 'lib/hooks';

import { getComputedRatio } from '../utils';

export const useRatio = (min: number, max: number, value: string | number = 0) => {
  const numberValue = Number(value);

  const [ratio, setRatio] = useState(() => getComputedRatio(min, max, numberValue));

  useUpdateEffect(() => {
    setRatio(getComputedRatio(min, max, numberValue));
  }, [min, max, numberValue]);

  return ratio;
};
