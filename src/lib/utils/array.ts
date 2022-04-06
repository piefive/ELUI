import type { U } from 'ts-toolbelt';
import { equals } from 'ramda';

export const reverseArrayValue = <Arr extends unknown[]>(array: Arr, value: Arr[number]) => {
  const nextArray = <Arr>[];
  let isInclude = false;

  for (let i = 0; i < array.length; i++) {
    if (equals(array[i], value)) isInclude = true;
    else nextArray.push(array[i]);
  }

  return isInclude ? nextArray : [...array, value];
};

export const getArrayValue = <Arr extends unknown[]>(
  array: U.Nullable<Arr> | string,
  index: number
): Arr[number] | undefined => {
  if (!array) return undefined;

  let n = Math.trunc(index) || 0;
  if (n < 0) n += array.length;
  if (n < 0 || n >= array.length) return undefined;

  return array[n];
};
