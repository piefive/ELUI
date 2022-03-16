import type { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react';
import type { U } from 'ts-toolbelt';
import type { IMask } from 'react-imask';

import type { TStyledComponentsProps } from 'lib';

export interface IInputField extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  value?: string | number;
  type?: 'text' | 'number' | 'password' | 'email' | 'tel';
  onChange?: ChangeEventHandler<HTMLInputElement>;
  maskOptions?: IMask.AnyMaskedOptions;
}

export interface IInput extends IInputField {
  label?: string;
  message?: string;
  validate?: U.Nullable<boolean>;
  validateMessage?: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  boxStyle?: TStyledComponentsProps;
  isClearable?: boolean;
  isRequired?: boolean;
  isFocused?: boolean;
}
