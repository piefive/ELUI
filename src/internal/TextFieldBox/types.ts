import type { MutableRefObject, ReactNode } from 'react';
import type { U } from 'ts-toolbelt';

import type { TStyledComponentsProps } from 'lib';

export type TTextFieldBox<Element extends HTMLInputElement | HTMLTextAreaElement> = {
  fieldRef?: MutableRefObject<U.Nullable<Element>>;
  containerRef?: MutableRefObject<U.Nullable<HTMLDivElement>>;
  className?: string;
  label?: string;
  validateMessage?: string;
  message?: string;
  isRequired?: boolean;
  isFocused?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  validate?: U.Nullable<boolean>;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  children: ReactNode;
  boxStyle?: TStyledComponentsProps;
};
