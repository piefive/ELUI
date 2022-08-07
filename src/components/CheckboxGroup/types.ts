import type {
  ChangeEventHandler,
  ForwardRefExoticComponent,
  FunctionComponent,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

import { Checkbox } from 'components/CheckboxGroup/units';
import type { ISelectionFieldBox, TFieldBox, TSelectionFieldVariant } from 'internal';

export type TCheckboxChecked = boolean | 'indeterminate';

export interface ICheckboxInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'checked' | 'children' | 'type' | 'className'> {
  checked?: TCheckboxChecked;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface ICheckbox
  extends ICheckboxInput,
    Omit<ISelectionFieldBox, 'children' | 'boxClassName' | 'isChecked' | 'isDisabled'> {
  className?: string;
}

export type TCheckboxContext = {
  variant?: TSelectionFieldVariant;
  name?: string;
  checkedValues?: string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
};

export interface ICheckboxGroupComponent extends TCheckboxContext, Omit<TFieldBox, 'onLabelClick'> {
  children: ReactNode;
}

export interface ICheckboxGroup extends FunctionComponent<ICheckboxGroupComponent> {
  Checkbox: ICheckboxGroupCheckbox;
}

export type ICheckboxGroupCheckbox = ForwardRefExoticComponent<
  Omit<ICheckbox, 'checked' | 'onChange' | 'variant' | 'name'> & { value: string | number }
>;
