import type { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TMenuValue = any;

export type TMenuHandler<Value extends TMenuValue = TMenuValue> = (value: Value) => void;

export type TMenuItem<Value extends TMenuValue = TMenuValue> = {
  className?: string;
  value?: Value;
  leftSlot?: ReactNode | 'empty';
  rightSlot?: ReactNode;
  children: ReactNode;
  withSeparator?: boolean;
  disabled?: boolean;
  checked?: boolean;
  onClick?: () => void;
};

export type TMenuContext<Value extends TMenuValue = TMenuValue> = {
  activeValues: Value[];
  onChange?: TMenuHandler<Value>;
  multiple?: boolean;
};

export interface IMenu<Value extends TMenuValue = TMenuValue> extends Omit<TMenuContext<Value>, 'activeValues'> {
  className?: string;
  activeValues?: Value[] | Value;
  children: ReactNode;
}
