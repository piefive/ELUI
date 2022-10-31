import { isArray, isNil, isObject } from './is';

export const toArray = <Value>(value?: Value | Value[]): Value[] => {
  if (isNil(value)) return [];

  return isArray(value) ? value : [value];
};

export const toString = (value: unknown) => {
  if (isObject(value)) return JSON.stringify(value);
  return value.toString();
};
