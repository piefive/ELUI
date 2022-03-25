import { isArray } from 'lib';

import type { TSelectValue } from '../types';

export const getActiveOption = <SelectValue extends TSelectValue>(activeOption?: SelectValue | SelectValue[]) => {
  if (isArray(activeOption)) return activeOption;
  if (activeOption) return [activeOption];
  return <SelectValue[]>[];
};
