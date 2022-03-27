import { combineClassNames, mergeRefs } from 'lib';
import { TextFieldBox } from 'internal';
import { Popover } from 'components/Popover';
import { Menu, TMenuItem } from 'components/Menu';

import type { ISelect } from './types';
import { SELECT_CN } from './constants';
import { useSelect } from './hooks';

const SelectComponent = <SelectValue extends TMenuItem = TMenuItem>({
  className,
  children,
  disabled,
  label,
  isRequired,
  validate,
  validateMessage,
  message,
  boxStyle,
  ...rest
}: ISelect<SelectValue>) => {
  const { selectRef, containerRef, boxRef, popoverRef } = useSelect();

  return (
    <Popover
      ref={popoverRef}
      popover={<Menu<SelectValue> {...rest}>{children}</Menu>}
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
          {...{ label, isRequired, validate, validateMessage, message, boxStyle }}
        >
          asd
        </TextFieldBox>
      )}
    </Popover>
  );
};

type TSelectComponent = typeof SelectComponent;

export interface ISelectComponent extends TSelectComponent {
  Option: typeof Menu.Item;
}

export const Select = SelectComponent as ISelectComponent;

Select.Option = Menu.Item;
