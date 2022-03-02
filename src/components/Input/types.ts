import type { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react';
import type { U } from 'ts-toolbelt';

import type { TStyledComponentsProps } from 'lib';

export interface IInput extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  value?: string | number;
  type?: 'text' | 'number' | 'password' | 'email' | 'tel';
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  isClearable?: boolean;
  isRequired?: boolean;
  isFocused?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  message?: string;
  validate?: U.Nullable<boolean>;
  validateMessage?: string;
  boxStyle?: TStyledComponentsProps;
}
