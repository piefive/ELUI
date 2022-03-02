import type { MutableRefObject } from 'react';
import type { U } from 'ts-toolbelt';

import type { IInput } from '../../types';

export interface IInputRightSlot extends Pick<IInput, 'isClearable' | 'rightSlot'> {
  inputRef: MutableRefObject<U.Nullable<HTMLInputElement>>;
}
