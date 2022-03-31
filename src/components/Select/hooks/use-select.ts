import { KeyboardEventHandler, useCallback, useImperativeHandle, useRef } from 'react';
import type { U } from 'ts-toolbelt';

import type { TMenuItem, TMenuValue } from 'components/Menu';
import { usePopoverRef } from 'components/Popover';
import { getArrayValue, useLatest } from 'lib';

import type { ISelect } from '../types';

interface IUseSelect<SelectValue extends TMenuValue = TMenuValue>
  extends Pick<ISelect<SelectValue>, 'onChange' | 'onClear'> {
  activeValues: TMenuItem<SelectValue>[];
}

const DELETE_KEYS = ['Delete', 'Backspace'];

export const useSelect = <SelectValue extends TMenuValue = TMenuValue>({
  onChange,
  onClear,
  activeValues,
}: IUseSelect<SelectValue>) => {
  const popoverRef = usePopoverRef();
  const fieldRef = useRef<HTMLElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftSlotRef = useRef<U.Nullable<HTMLDivElement>>(null);
  const rightSlotRef = useRef<U.Nullable<HTMLDivElement>>(null);

  const values = useLatest(activeValues);

  const getMaxContentWidth = useCallback(() => {
    const box = boxRef.current.clientWidth;
    const left = leftSlotRef.current?.clientWidth ?? 0;
    const right = rightSlotRef.current?.clientWidth ?? 0;

    return box - (left + right);
  }, []);

  const handleClearLast = useCallback<KeyboardEventHandler<HTMLInputElement>>(
    event => {
      if (DELETE_KEYS.includes(event.code) && onClear) {
        const { value } = event.currentTarget;
        const lastItem = getArrayValue(values.current, -1);

        if (!value && lastItem) onClear(lastItem.value);
      }
    },
    [onClear, values]
  );

  useImperativeHandle(
    fieldRef,
    () => {
      const ref = { ...containerRef.current };

      ref.focus = () => popoverRef.current.setOpen(true);
      ref.dispatchEvent = () => true;

      Object.defineProperty(ref, 'value', {
        get: () => values?.current,
        set: (value: SelectValue | string) => (value === '' ? onClear?.() : onChange(<SelectValue>value)),
      });

      return ref;
    },
    [onChange, onClear, popoverRef, values]
  );

  return {
    fieldRef,
    containerRef,
    popoverRef,
    boxRef,
    leftSlotRef,
    rightSlotRef,
    getMaxContentWidth,
    handleClearLast,
  };
};
