import { clamp } from 'ramda';

import { isNaN } from 'lib';

export const getComputedRatio = (min: number, max: number, value: number) => {
  if (isNaN(value)) return min;

  return (clamp(min, max, value) - min) / (max - min);
};
