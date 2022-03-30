import { combineClassNames, isArrayEmpty, mergeRefs, usePropsFromChildren } from 'lib';
import { TextFieldBox } from 'internal';
import { Popover } from 'components/Popover';
import { Menu, TMenuItem, TMenuValue } from 'components/Menu';

import type { ISelect } from './types';
import { SELECT_CN } from './constants';
import { useSelect, useSelectActiveValue } from './hooks';
import { SelectSearch, SelectValue } from './units';
import { StyledOptions, StyledPlaceholder, fieldMixin } from './styled';

const SelectComponent = <SelectValue extends TMenuValue = TMenuValue>({
  className,
  children,
  disabled,
  label,
  isRequired,
  validate,
  validateMessage,
  message,
  boxStyle,
  onClear,
  placeholder,
  onSearch,
  searchFallback,
  ...rest
}: ISelect<SelectValue>) => {
  const { onChange, activeValue, multiple } = rest;

  const select = useSelect<SelectValue>({ onClear, onChange });
  const options = usePropsFromChildren<TMenuItem<SelectValue>>(children, Menu.Item);
  const activeValues = useSelectActiveValue<SelectValue>(options, activeValue);

  const isValuesEmpty = isArrayEmpty(activeValues);
  const { selectRef, containerRef, boxRef, popoverRef } = select;

  return (
    <Popover
      ref={popoverRef}
      placement="bottom"
      offset={[0, 14]}
      outsideRefs={[boxRef]}
      forceUpdateTarget={activeValues}
      checkTargetWidth
      popover={
        <StyledOptions>
          <Menu<SelectValue> {...rest}>{children}</Menu>
        </StyledOptions>
      }
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
          isClearable={onClear && !isValuesEmpty}
          fieldStyle={fieldMixin}
          {...{ label, isRequired, validate, validateMessage, message, boxStyle }}
        >
          {isValuesEmpty && !!placeholder && <StyledPlaceholder>{placeholder}</StyledPlaceholder>}
          <SelectValue<SelectValue> values={activeValues} isMultiple={multiple} {...{ onClear }}>
            {isPopoverOpen && onSearch && <SelectSearch fallback={searchFallback} handleSearch={onSearch} />}
          </SelectValue>
        </TextFieldBox>
      )}
    </Popover>
  );
};

type TSelectComponent = typeof SelectComponent;

export interface ISelectComponent extends TSelectComponent {
  Option: typeof Menu.Item;
  displayName: string;
}

export const Select = SelectComponent as ISelectComponent;
Select.displayName = 'Select';
Select.Option = Menu.Item;
