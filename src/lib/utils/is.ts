import { includes } from 'ramda';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TAnyValue = any;

export const isClient = () => !isUndefined(window);

export const isString = (value: unknown): value is string => typeof value === 'string';

export const isNumber = (value: unknown): value is number => typeof value === 'number';

export const isNaN = Number.isNaN;

export const isBool = (value: unknown): value is boolean => includes(value, [true, false]);

export const isArray = Array.isArray;

export const isObject = (value: TAnyValue): value is typeof Object => {
  const nonNullObject = value && typeof value === 'object';

  return nonNullObject && !includes(value, ['[object RegExp]', '[object Date]']);
};

export const isUndefined = (value: unknown): value is undefined => typeof value === 'undefined';
