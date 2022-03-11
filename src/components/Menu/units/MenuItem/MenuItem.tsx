import { equals } from 'ramda';

import { combineClassNames, isPrimitiveReactNode } from 'lib';
import { Checkbox } from 'components/CheckboxGroup';
import { Typography } from 'components/Typography';

import type { TMenuItem, TMenuValue } from '../../types';
import { MENU_ITEM_CN } from '../../constants';
import { useMenuContext } from '../../hooks';

import {
  StyledMenuItem,
  StyledMenuItemLeftContent,
  StyledMenuItemLeftSlot,
  StyledMenuItemLeftSlotEmpty,
  StyledMenuItemRightContent,
} from './styled';

export const MenuItem = <Value extends TMenuValue = TMenuValue>({
  className,
  children,
  leftSlot,
  rightSlot,
  value,
  checked,
  disabled,
}: TMenuItem<Value>) => {
  const { activeValues, onChange, multiple } = useMenuContext<Value>();

  const isRightSlotRender = Boolean(rightSlot || multiple);
  const isChecked = checked ?? activeValues.some(activeValue => equals(activeValue, value));

  const handleChange = onChange ? () => onChange(value) : undefined;

  return (
    <StyledMenuItem
      className={combineClassNames(className, MENU_ITEM_CN)}
      onClick={handleChange}
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
          {multiple && <Checkbox checked={isChecked} onChange={handleChange} boxStyle={{ padding: 0 }} />}
        </StyledMenuItemRightContent>
      )}
    </StyledMenuItem>
  );
};
