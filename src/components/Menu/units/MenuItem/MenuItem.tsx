import { equals, isNil } from 'ramda';

import { combineClassNames, isPrimitiveReactNode } from 'lib';
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
  disabled,
  withSeparator,
  onClick,
}: TMenuItem<Value>) => {
  const { activeValues, onChange, multiple } = useMenuContext<Value>();

  const isRightSlotRender = Boolean(rightSlot || multiple);
  const isChecked = checked ?? activeValues.some(activeValue => equals(activeValue, value));
  const isChangeable = Boolean(!isNil(value) && onChange);

  const handleChange = isChangeable ? () => onChange(value) : undefined;

  return (
    <>
      {withSeparator && <StyledMenuItemSeparator />}
      <StyledMenuItemBox className={combineClassNames(className, MENU_ITEM_CN)}>
        <StyledMenuItem
          onClick={handleChange || onClick ? () => [handleChange, onClick].forEach(fn => fn?.()) : undefined}
          {...{ isChecked, disabled }}
        >
          <StyledMenuItemLeftContent>
            {leftSlot && (
              <StyledMenuItemLeftSlot>
                {leftSlot === 'empty' ? <StyledMenuItemLeftSlotEmpty /> : leftSlot}
              </StyledMenuItemLeftSlot>
            )}
            {isPrimitiveReactNode(children) ? <Typography>{children}</Typography> : children}
          </StyledMenuItemLeftContent>
          {isRightSlotRender && (
            <StyledMenuItemRightContent>
              {rightSlot}
              {multiple && isChangeable && (
                <Checkbox checked={isChecked} onChange={handleChange} boxStyle={{ padding: 0, marginLeft: 24 }} />
              )}
            </StyledMenuItemRightContent>
          )}
        </StyledMenuItem>
      </StyledMenuItemBox>
    </>
  );
};
