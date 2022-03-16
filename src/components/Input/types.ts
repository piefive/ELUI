import type { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react';
import type { U } from 'ts-toolbelt';
import type { IMask } from 'react-imask';

import type { TStyledComponentsProps } from 'lib';

interface IBaseInputField extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  value?: string | number;
  type?: 'text' | 'number' | 'password' | 'email' | 'tel';
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface IInputFieldWithoutMask extends IBaseInputField {
  onComplete?: (value: string) => void;
}

export interface IInputFieldWithMask extends IBaseInputField {
  onComplete?: (value: string, iMask: IMask.InputMask<IMask.AnyMaskedOptions>) => void;
  maskOptions: IMask.AnyMaskedOptions;
}

type TInputField = IInputFieldWithMask | IInputFieldWithoutMask;

export type TInput = {
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
} & TInputField;
