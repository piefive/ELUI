import { RefObject, useRef } from 'react';

export const useLatest = <T>(value: T): RefObject<T> => {
  const ref = useRef<T>(value);

  ref.current = value;

  return ref;
};
