import type { MutableRefObject, ReactNode, Ref } from 'react';
import type { U } from 'ts-toolbelt';

import type { TStyledComponentsProps } from 'lib';

import type { TFieldBox } from '../FieldBox';

export interface ITextFieldBox<Element extends HTMLElement = HTMLElement> extends TFieldBox {
  fieldRef?: MutableRefObject<U.Nullable<Element>>;
  containerRef?: Ref<U.Nullable<HTMLDivElement>>;
  boxRef?: Ref<U.Nullable<HTMLDivElement>>;
  leftSlotRef?: Ref<U.Nullable<HTMLDivElement>>;
  rightSlotRef?: Ref<U.Nullable<HTMLDivElement>>;
  isFocused?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  children: ReactNode;
  fieldStyle?: TStyledComponentsProps;
}
