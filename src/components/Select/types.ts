import type { ReactNode } from 'react';

import type { ITextFieldBox } from 'internal';

export type TSelectValue = unknown;

type TSelectBox = Pick<
  ITextFieldBox,
  'className' | 'label' | 'message' | 'validate' | 'validateMessage' | 'boxStyle' | 'isRequired'
>;

export type TSelectContext<SelectValue = TSelectValue> = {
  activeValue: SelectValue[];
  onChange?: TSelectHandler<SelectValue>;
};

export type TSelectHandler<SelectValue = TSelectValue> = (value: SelectValue) => void;

export type TSelectOption<SelectValue = TSelectValue> = {
  value: SelectValue;
  children: ReactNode;
  disabled?: boolean;
};

export interface ISelect<SelectValue = TSelectValue>
  extends TSelectBox,
    Omit<TSelectContext<SelectValue>, 'activeValue'> {
  activeValue?: SelectValue | SelectValue[];
  children: ReactNode;
  disabled?: boolean;
}
