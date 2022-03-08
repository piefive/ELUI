import type {
  ChangeEventHandler,
  ForwardRefExoticComponent,
  FunctionComponent,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

import type { ISelectionFieldBox, TFieldBox, TSelectionFieldVariant } from 'internal';

export type TRadioContext = {
  variant?: TSelectionFieldVariant;
  name?: string;
  activeValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
};

export interface IRadioInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'children' | 'type' | 'className'> {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface IRadio
  extends IRadioInput,
    Omit<ISelectionFieldBox, 'children' | 'boxClassName' | 'isChecked' | 'isDisabled'> {
  className?: string;
}

export interface IRadioGroupComponent extends TRadioContext, Omit<TFieldBox, 'onLabelClick'> {
  children: ReactNode;
}

export interface IRadioGroup extends FunctionComponent<IRadioGroupComponent> {
  Radio: ForwardRefExoticComponent<Omit<IRadio, 'checked' | 'onChange' | 'variant' | 'name'>>;
}
