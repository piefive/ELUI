import { ReactElement, useMemo } from 'react';

import { combineClassNames, isArray } from 'lib';

import type { IMenu, TMenuContext, TMenuValue } from './types';
import { MENU_CN } from './constants';
import { MenuProvider } from './hooks';
import { MenuItem } from './units';
import { StyledMenu } from './styled';

export const MenuComponent = <Value extends TMenuValue = TMenuValue>({
  className,
  children,
  activeValues,
  multiple,
  onChange,
}: IMenu<Value>) => {
  const ctx = useMemo<TMenuContext<Value>>(
    () => ({ activeValues: isArray(activeValues) ? activeValues : [activeValues].filter(Boolean), multiple, onChange }),
    [activeValues, multiple, onChange]
  );

  return (
    <StyledMenu className={combineClassNames(className, MENU_CN)}>
      <MenuProvider value={ctx}>{children}</MenuProvider>
    </StyledMenu>
  );
};

type TMenu = (<Value extends TMenuValue = TMenuValue>(props: IMenu<Value>) => ReactElement) & { Item: typeof MenuItem };

export const Menu = MenuComponent as TMenu;

Menu.Item = MenuItem;
