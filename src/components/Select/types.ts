import type { FC, ReactNode } from 'react';

import type { ITextFieldBox } from 'internal';
import type { TMenuContext, TMenuItem, TMenuValue } from 'components/Menu';

type TSelectBox = Pick<
  ITextFieldBox,
  'className' | 'label' | 'message' | 'validate' | 'validateMessage' | 'boxStyle' | 'isRequired'
>;

export interface ISelect<SelectValue = TMenuValue> extends TSelectBox, Omit<TMenuContext<SelectValue>, 'activeValue'> {
  activeValue?: SelectValue | SelectValue[];
  children: ReactNode;
  disabled?: boolean;
  optionComponent?: FC<TMenuItem>;
  onClear?: (value?: SelectValue) => void;
}
