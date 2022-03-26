import { useMemo } from 'react';

import { Popover } from 'components/Popover';
import { combineClassNames, mergeRefs } from 'lib';
import { TextFieldBox } from 'internal';

import type { ISelect, TSelectContext, TSelectValue } from './types';
import { SELECT_CN } from './constants';
import { SelectProvider, useSelect } from './hooks';
import { getActiveOption } from './utils';
import { Option } from './units';

const SelectComponent = <SelectValue extends TSelectValue = TSelectValue>({
  className,
  children,
  activeValue,
  onChange,
  disabled,
  ...rest
}: ISelect<SelectValue>) => {
  const { selectRef, containerRef, boxRef, popoverRef } = useSelect();

  const ctx = useMemo<TSelectContext<SelectValue>>(
    () => ({ activeValue: getActiveOption(activeValue), onChange }),
    [activeValue, onChange]
  );

  return (
    <Popover
      ref={popoverRef}
      popover={<SelectProvider value={ctx}>{children}</SelectProvider>}
      placement="bottom"
      offset={[0, 14]}
      outsideRefs={[boxRef]}
      checkTargetWidth
    >
      {({ ref, onToggle, isPopoverOpen }) => (
        <TextFieldBox
          boxRef={boxRef}
          fieldRef={selectRef}
          containerRef={mergeRefs(ref, containerRef)}
          className={combineClassNames(className, SELECT_CN)}
          onLabelClick={onToggle}
          isFocused={isPopoverOpen}
          isDisabled={disabled}
          {...rest}
        >
          asd
        </TextFieldBox>
      )}
    </Popover>
  );
};

type TSelectComponent = typeof SelectComponent;

export interface ISelectComponent extends TSelectComponent {
  Option: typeof Option;
}

export const Select = SelectComponent as ISelectComponent;

Select.Option = Option;
