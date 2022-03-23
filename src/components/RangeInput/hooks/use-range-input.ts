import { MouseEvent, RefObject, useCallback, useRef } from 'react';
import { clamp } from 'ramda';

import { dispatchEvent } from 'lib';

export type TThumb = {
  innerRef: RefObject<HTMLInputElement>;
  min: number;
  max: number;
};

export const useRangeInput = ({ innerRef, max, min }: TThumb) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const setInputValue = useCallback(
    value => dispatchEvent({ event: 'input', element: innerRef.current, property: 'value', args: value }),
    [innerRef]
  );

  const handleChangeTrack = useCallback(
    (x: number) => {
      const { left, width } = trackRef.current.getBoundingClientRect();
      const value = clamp(0, 1, (x - left) / width) * (max - min) + min;
      setInputValue(Math.round(value));
    },
    [trackRef, max, min, setInputValue]
  );

  const handleClickRail = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      console.log('click');
      thumbRef.current.focus();
      handleChangeTrack(event.pageX);
    },
    [handleChangeTrack]
  );

  return {
    trackRef,
    thumbRef,
    handleChangeTrack,
    handleClickRail,
  };
};
