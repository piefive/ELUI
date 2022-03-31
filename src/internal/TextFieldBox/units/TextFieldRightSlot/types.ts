import type { MutableRefObject, ReactNode, Ref } from 'react';
import type { U } from 'ts-toolbelt';

export type TTextFieldRightSlot<Element extends HTMLElement> = {
  fieldRef: MutableRefObject<U.Nullable<Element>>;
  isClearable: boolean;
  rightSlot: ReactNode;
  innerRef?: Ref<HTMLDivElement>;
};
