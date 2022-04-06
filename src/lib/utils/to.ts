import { isArray, isObject } from './is';

export const toArray = <Value>(value?: Value | Value[]): Value[] => {
  if (!value) return [];
  return isArray(value) ? value : [value];
};

export const toString = (value: unknown) => {
  if (isObject(value)) return JSON.stringify(value);
  return value.toString();
};
