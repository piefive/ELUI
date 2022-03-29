import type { TMenuItem, TMenuValue } from 'components/Menu';

export type TSelectValue<SelectValue extends TMenuValue = TMenuValue> = {
  isMultiple?: boolean;
  values: TMenuItem<SelectValue>[];
};
