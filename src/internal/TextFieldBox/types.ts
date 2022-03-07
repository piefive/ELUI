import type { MutableRefObject, ReactNode } from 'react';
import type { U } from 'ts-toolbelt';

import type { TFieldBox } from '../FieldBox';

export interface ITextFieldBox<Element extends HTMLInputElement | HTMLTextAreaElement> extends TFieldBox {
  fieldRef?: MutableRefObject<U.Nullable<Element>>;
  containerRef?: MutableRefObject<U.Nullable<HTMLDivElement>>;
  isFocused?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  children: ReactNode;
}
