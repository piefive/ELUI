import { useImperativeHandle, useRef } from 'react';

import { usePopoverRef } from 'components/Popover';
import type { TMenuValue } from 'components/Menu';

import type { ISelect } from '../types';

export const useSelect = <SelectValue extends TMenuValue = TMenuValue>({
  onChange,
  onClear,
}: Pick<ISelect<SelectValue>, 'onChange' | 'onClear'>) => {
  const popoverRef = usePopoverRef();
  const selectRef = useRef<HTMLElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(
    selectRef,
    () => {
      const ref = {
        ...containerRef.current,
        focus: () => popoverRef.current.setOpen(true),
        dispatchEvent: () => true,
      };

      Object.defineProperty(ref, 'value', {
        set(value: SelectValue | string) {
          if (value === '') onClear?.();
          else onChange(<SelectValue>value);
        },
      });

      return ref;
    },
    [onChange, onClear, popoverRef]
  );

  return { selectRef, containerRef, popoverRef, boxRef };
};
