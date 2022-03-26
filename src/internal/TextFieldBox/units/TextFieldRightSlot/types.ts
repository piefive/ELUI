import type { MutableRefObject, ReactNode } from 'react';
import type { U } from 'ts-toolbelt';

export type TTextFieldRightSlot<Element extends HTMLElement> = {
  fieldRef: MutableRefObject<U.Nullable<Element>>;
  isClearable: boolean;
  rightSlot: ReactNode;
};
