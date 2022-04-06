import { useCallback } from 'react';

import { combineClassNames, isArrayEmpty, isFn, mergeRefs, usePropsFromChildren } from 'lib';
import { TextFieldBox } from 'internal';
import { Popover } from 'components/Popover';
import { Menu, TMenuHandler, TMenuItem, TMenuValue } from 'components/Menu';

import type { ISelect } from './types';
import { SELECT_CN } from './constants';
import { useSelect, useSelectActiveValue } from './hooks';
import { SelectChevron, SelectOptions, SelectSearch, SelectValue } from './units';
import { StyledPlaceholder, fieldMixin } from './styled';

const SelectComponent = <SelectValue extends TMenuValue = TMenuValue>({
  className,
  children,
  disabled = false,
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
  withChevron = true,
  leftSlot,
  onChange,
  isCloseAfterChange,
  isPortal,
  zIndex,
  ...rest
}: ISelect<SelectValue>) => {
  const { activeValue, multiple } = rest;

  const options = usePropsFromChildren<TMenuItem<SelectValue>>(children, Menu.Item);
  const activeValues = useSelectActiveValue<SelectValue>(options, activeValue);
  const select = useSelect<SelectValue>({ onClear, onChange, activeValues });

  const isValuesEmpty = isArrayEmpty(activeValues);
  const { handleClearLast, getMaxContentWidth, containerRef, boxRef, popoverRef, ...bindSelect } = select;

  const handleChange = useCallback<TMenuHandler<SelectValue>>(
    (...changeRest) => {
      onChange?.(...changeRest);
      if (isCloseAfterChange ?? !multiple) popoverRef.current.setOpen(false);
    },
    [isCloseAfterChange, multiple, onChange, popoverRef]
  );

  return (
    <Popover
      ref={popoverRef}
      placement="bottom"
      offset={[0, 14]}
      outsideRefs={[boxRef]}
      popover={<SelectOptions {...{ ...rest, onChange: handleChange }}>{children}</SelectOptions>}
      forceUpdateTarget={activeValues}
      {...{ disabled, isPortal, zIndex }}
      checkTargetWidth
    >
      {({ ref, onToggle, isPopoverOpen }) => {
        const isSearchable = isPopoverOpen && onSearch;
        const isPlaceholderVisible = !isSearchable && isValuesEmpty && !!placeholder;

        return (
          <TextFieldBox
            boxRef={boxRef}
            containerRef={mergeRefs(ref, containerRef)}
            className={combineClassNames(className, SELECT_CN)}
            onLabelClick={onToggle}
            isFocused={isPopoverOpen}
            isDisabled={disabled}
            isClearable={onClear && !isValuesEmpty}
            rightSlot={withChevron && <SelectChevron />}
            fieldStyle={fieldMixin}
            leftSlot={isFn(leftSlot) ? leftSlot(activeValues) : leftSlot}
            {...{ ...bindSelect, label, isRequired, validate, validateMessage, message, boxStyle }}
          >
            {isPlaceholderVisible && <StyledPlaceholder isDisabled={disabled}>{placeholder}</StyledPlaceholder>}
            <SelectValue<SelectValue> values={activeValues} isMultiple={multiple} {...{ onClear }}>
              {isSearchable && (
                <SelectSearch
                  fallback={searchFallback}
                  getMaxWidth={getMaxContentWidth}
                  onClear={multiple ? handleClearLast : undefined}
                  handleSearch={onSearch}
                />
              )}
            </SelectValue>
          </TextFieldBox>
        );
      }}
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
