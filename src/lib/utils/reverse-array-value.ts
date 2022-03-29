import { equals } from 'ramda';

export const reverseArrayValue = <Arr extends Array<unknown>>(array: Arr, value: Arr[number]) => {
  const nextArray = <Arr>[];
  let isInclude = false;

  for (let i = 0; i < array.length; i++) {
    if (equals(array[i], value)) isInclude = true;
    else nextArray.push(array[i]);
  }

  return isInclude ? nextArray : [...array, value];
};
