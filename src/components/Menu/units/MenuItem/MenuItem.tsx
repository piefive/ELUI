import { equals, isNil } from 'ramda';

import { bindAria, combineClassNames, isPrimitiveReactNode } from 'lib';
import { Checkbox } from 'components/CheckboxGroup';
import { Typography } from 'components/Typography';

import type { TMenuItem, TMenuValue } from '../../types';
import { MENU_ITEM_CN } from '../../constants';
import { useMenuContext } from '../../hooks';

import {
  StyledMenuItem,
  StyledMenuItemBox,
  StyledMenuItemLeftContent,
  StyledMenuItemLeftSlot,
  StyledMenuItemLeftSlotEmpty,
  StyledMenuItemRightContent,
  StyledMenuItemSeparator,
} from './styled';

export const MenuItem = <Value extends TMenuValue = TMenuValue>({
  className,
  children,
  leftSlot,
  rightSlot,
  value,
  checked,
  disabled = false,
  withSeparator,
  onClick,
}: TMenuItem<Value>) => {
  const { activeValue, onChange, multiple } = useMenuContext<Value>();

  const isRightSlotRender = Boolean(rightSlot || multiple);
  const isChecked = checked ?? activeValue.some(activeValue => equals(activeValue, value));
  const isChangeable = Boolean(!isNil(value) && onChange);

  const handleChange = isChangeable && !disabled ? () => onChange(value) : undefined;

  const handleClickItem =
    handleChange || onClick
      ? () => {
          handleChange?.();
          onClick?.();
        }
      : undefined;

  return (
    <>
      {withSeparator && <StyledMenuItemSeparator />}
      <StyledMenuItemBox
        className={combineClassNames(className, MENU_ITEM_CN)}
        tabIndex={disabled || isChecked ? -1 : 0}
        {...bindAria({ checked: isChecked, disabled })}
      >
        <StyledMenuItem onClick={handleClickItem} {...{ isChecked, disabled }}>
          <StyledMenuItemLeftContent>
            {leftSlot && (
              <StyledMenuItemLeftSlot>
                {leftSlot === 'empty' ? <StyledMenuItemLeftSlotEmpty /> : leftSlot}
              </StyledMenuItemLeftSlot>
            )}
            {isPrimitiveReactNode(children) ? <Typography color="inherit">{children}</Typography> : children}
          </StyledMenuItemLeftContent>
          {isRightSlotRender && (
            <StyledMenuItemRightContent>
              {rightSlot}
              {multiple && isChangeable && (
                <Checkbox
                  checked={isChecked}
                  onChange={handleChange}
                  boxStyle={{ padding: 0, marginLeft: 24 }}
                  {...{ disabled }}
                />
              )}
            </StyledMenuItemRightContent>
          )}
        </StyledMenuItem>
      </StyledMenuItemBox>
    </>
  );
};
