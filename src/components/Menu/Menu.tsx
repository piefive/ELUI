import { useMemo } from 'react';

import { combineClassNames } from 'lib';

import type { IMenu, TMenuContext, TMenuValue } from './types';
import { MENU_CN } from './constants';
import { getActiveItem } from './utils';
import { MenuProvider } from './hooks';
import { MenuItem } from './units';
import { StyledMenu } from './styled';

const MenuComponent = <Value extends TMenuValue = TMenuValue>({
  className,
  children,
  activeValue,
  multiple,
  onChange,
}: IMenu<Value>) => {
  const ctx = useMemo<TMenuContext<Value>>(
    () => ({ activeValue: getActiveItem(activeValue), multiple, onChange }),
    [activeValue, multiple, onChange]
  );

  return (
    <StyledMenu className={combineClassNames(className, MENU_CN)}>
      <MenuProvider value={ctx}>{children}</MenuProvider>
    </StyledMenu>
  );
};

type TMenuComponent = typeof MenuComponent;

export interface IMenuComponent extends TMenuComponent {
  Item: typeof MenuItem;
}

export const Menu = MenuComponent as IMenuComponent;

Menu.Item = MenuItem;
