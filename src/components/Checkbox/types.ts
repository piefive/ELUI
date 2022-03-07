import type { ChangeEventHandler, InputHTMLAttributes } from 'react';

import type { ISelectionFieldBox } from 'internal';

export type TCheckboxChecked = boolean | 'indeterminate';

export interface ICheckboxInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'checked' | 'children' | 'type' | 'className'> {
  checked?: TCheckboxChecked;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export interface ICheckbox extends ICheckboxInput, Omit<ISelectionFieldBox, 'children'> {
  className: string;
}
