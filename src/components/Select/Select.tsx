import { combineClassNames, mergeRefs, usePropsFromChildren } from 'lib';
import { TextFieldBox } from 'internal';
import { Popover } from 'components/Popover';
import { Menu, TMenuItem, TMenuValue } from 'components/Menu';

import type { ISelect } from './types';
import { SELECT_CN } from './constants';
import { useSelect, useSelectActiveValue } from './hooks';
import { SelectValue } from './units';
import { StyledOptions, fieldStyleMixin } from './styled';

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
  optionComponent = Menu.Item,
  ...rest
}: ISelect<SelectValue>) => {
  const { selectRef, containerRef, boxRef, popoverRef } = useSelect();
  const options = usePropsFromChildren<TMenuItem<SelectValue>>(children, optionComponent);
  const activeValues = useSelectActiveValue<SelectValue>(options, rest.activeValue);

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
          fieldStyle={fieldStyleMixin(rest.multiple && !!activeValues.length)}
          {...{ label, isRequired, validate, validateMessage, message, boxStyle }}
        >
          {!!activeValues.length && <SelectValue<SelectValue> values={activeValues} isMultiple={rest.multiple} />}
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
