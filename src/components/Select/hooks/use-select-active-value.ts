import { useMemo } from 'react';
import { equals } from 'ramda';

import type { TMenuItem, TMenuValue } from 'components/Menu';
import { toArray } from 'lib/utils';

export const useSelectActiveValue = <SelectValue extends TMenuValue = TMenuValue>(
  options: TMenuItem<SelectValue>[],
  activeValue: SelectValue | SelectValue[]
) =>
  useMemo<TMenuItem<SelectValue>[]>(() => {
    const values = toArray(activeValue);
    return values.map(val => options.find(option => equals(val, option.value)));
  }, [activeValue, options]);
