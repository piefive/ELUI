import { isArray } from 'lib';

import type { TMenuValue } from '../types';

export const getActiveItem = <Value extends TMenuValue = TMenuValue>(activeItem?: Value | Value[]) => {
  if (isArray(activeItem)) return activeItem;
  if (activeItem) return [activeItem];
  return <Value[]>[];
};
