import { combineClassNames, isArrayEmpty, mergeRefs, usePropsFromChildren } from 'lib';
import { Popover } from 'components/Popover';
import { Menu, TMenuItem, TMenuValue } from 'components/Menu';
import { TextFieldBox } from 'internal';

import type { ISelect } from './types';
import { SELECT_CN } from './constants';
import { useSelect, useSelectActiveValue } from './hooks';
import { SelectValue } from './units';
import { StyledOptions, fieldMixin } from './styled';

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
  ...rest
}: ISelect<SelectValue>) => {
  const { onChange, activeValue, multiple } = rest;

  const { selectRef, containerRef, boxRef, popoverRef } = useSelect<SelectValue>({ onClear, onChange });
  const options = usePropsFromChildren<TMenuItem<SelectValue>>(children, Menu.Item);
  const activeValues = useSelectActiveValue<SelectValue>(options, activeValue);

  const isValuesEmpty = isArrayEmpty(activeValues);

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
          <SelectValue<SelectValue> values={activeValues} isMultiple={multiple} {...{ onClear }} />
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
