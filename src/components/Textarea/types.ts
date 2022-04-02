import type { ChangeEventHandler, ReactNode, TextareaHTMLAttributes } from 'react';
import type { U } from 'ts-toolbelt';

import type { TStyledComponentsProps } from 'lib';

export interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  value?: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  isRequired?: boolean;
  isClearable?: boolean;
  isResizable?: boolean;
  isAutoHeight?: boolean;
  validate?: U.Nullable<boolean>;
  validateMessage?: string;
  message?: string;
  boxStyle?: TStyledComponentsProps;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}
