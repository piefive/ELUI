import { CSSProperties, useCallback, useState } from 'react';
import { isNil } from 'ramda';

import { usePrevious } from 'lib';

import type { TActiveTabPosition } from '../types';

type TUseActiveLine = {
  activeLinePositionStyle: CSSProperties;
  onActivePositionChange: (position: TActiveTabPosition) => void;
  handleClearPosition: () => void;
};

const TRANSITION_DELTA = 0.01;
const INITIAL_POSITION = { width: 0, left: 0 };

export const useTabActiveLine = (): TUseActiveLine => {
  const [{ width, left }, onActivePositionChange] = useState<TActiveTabPosition>(INITIAL_POSITION);

  const isStart = width + left === 0;

  const prevLeft = usePrevious<number | null>(!isStart ? left : null);

  const isStartTransition = !isNil(prevLeft) && (left === 0 || Math.abs(left - prevLeft) / left > TRANSITION_DELTA);

  const handleClearPosition = useCallback(() => {
    onActivePositionChange(INITIAL_POSITION);
  }, []);

  return {
    activeLinePositionStyle: {
      width,
      left,
      ...(!isStartTransition ? { transitionDuration: '0s' } : null),
    },
    onActivePositionChange,
    handleClearPosition,
  };
};
