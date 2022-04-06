import type { ReactNode } from 'react';

import type { ITextFieldBox } from 'internal';
import type { TMenuContext, TMenuItem, TMenuValue } from 'components/Menu';

type TSelectBox = Pick<
  ITextFieldBox,
  'className' | 'label' | 'message' | 'validate' | 'validateMessage' | 'boxStyle' | 'isRequired'
>;

export type TSearchHandler = (value: string) => void;

export type TRenderLeftSlot<SelectValue = TMenuValue> = (values: TMenuItem<SelectValue>[]) => ReactNode;

export interface ISelect<SelectValue = TMenuValue> extends TSelectBox, Omit<TMenuContext<SelectValue>, 'activeValue'> {
  activeValue?: SelectValue | SelectValue[];
  children: ReactNode;
  disabled?: boolean;
  onClear?: (value?: SelectValue) => void;
  onSearch?: TSearchHandler;
  searchFallback?: string;
  placeholder?: string;
  withChevron?: boolean;
  isCloseAfterChange?: boolean;
  leftSlot?: TRenderLeftSlot<SelectValue> | ReactNode;
  isPortal?: boolean;
  zIndex?: number;
}
