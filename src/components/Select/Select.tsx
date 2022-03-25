import { MutableRefObject, useMemo } from 'react';

import { Popover } from 'components/Popover';
import { combineClassNames } from 'lib';
import { TextFieldBox } from 'internal';

import type { ISelect, TSelectContext, TSelectValue } from './types';
import { SELECT_CN } from './constants';
import { SelectProvider } from './hooks';
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
  const ctx = useMemo<TSelectContext<SelectValue>>(
    () => ({ activeValue: getActiveOption(activeValue), onChange }),
    [activeValue, onChange]
  );

  return (
    <Popover
      popover={<SelectProvider value={ctx}>{children}</SelectProvider>}
      placement="bottom"
      offset={[0, 14]}
      checkTargetWidth
    >
      {({ ref, onToggle, isPopoverOpen }) => (
        <TextFieldBox
          containerRef={ref as MutableRefObject<HTMLDivElement>}
          className={combineClassNames(className, SELECT_CN)}
          onLabelClick={onToggle}
          isFocused={isPopoverOpen}
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
