import type { TSelectOption, TSelectValue } from '../../types';

export const Option = <SelectValue extends TSelectValue = TSelectValue>({
  children,
  value,
  disabled,
}: TSelectOption<SelectValue>) => {
  return <div>{children}</div>;
};
