import type { ReactNode } from 'react';

import type { TMenuItem, TMenuValue } from 'components/Menu';

export type TSelectValue<SelectValue extends TMenuValue = TMenuValue> = {
  isMultiple?: boolean;
  values: TMenuItem<SelectValue>[];
  onClear?: (value: SelectValue) => void;
  children: ReactNode;
};
