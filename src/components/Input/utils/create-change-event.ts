import type { ChangeEvent } from 'react';

import { isFn } from 'lib';

import type { IInputFieldWithoutMask, TInput } from '../types';

export const createChangeEvent = (onChange: TInput['onChange'], onComplete: TInput['onComplete']) => {
  if (onChange || onComplete) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
      if (isFn<IInputFieldWithoutMask['onComplete']>(onComplete)) onComplete(event.currentTarget.value);
    };
  }
};
