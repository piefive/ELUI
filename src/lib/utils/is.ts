import { includes } from 'ramda';
import { Children, ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TAnyValue = any;

export const isClient = () => typeof window !== 'undefined';

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

export const isFn = <Fn extends (...args: unknown[]) => unknown = (...args: unknown[]) => unknown>(
  value: unknown
): value is Fn => typeof value === 'function';

export const isBetween = (value: number, min: number, max: number): boolean => value >= min && value <= max;

export const isPrimitive = (
  value: unknown
): value is string | number | boolean | null | undefined | symbol | bigint => {
  return value === null || ['string', 'number', 'boolean', 'undefined', 'symbol', 'bigint'].includes(typeof value);
};

export const isPrimitiveReactNode = (element: ReactNode): element is ReactNode => {
  const reactArrayElements = Children.toArray(element);
  let isPrimitiveElement = true;

  for (const reactElement of reactArrayElements)
    if (!isPrimitive(reactElement)) {
      isPrimitiveElement = false;
      break;
    }

  return isPrimitiveElement;
};
