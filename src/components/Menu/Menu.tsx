import { Ref, forwardRef, useMemo } from 'react';

import { combineClassNames } from 'lib';

import type { IMenu, TMenuContext, TMenuForwardRef, TMenuValue } from './types';
import { MENU_CN } from './constants';
import { getActiveItem } from './utils';
import { MenuProvider } from './hooks';
import { MenuItem } from './units';
import { StyledMenu } from './styled';

const MenuComponent = <Value extends TMenuValue = TMenuValue>(
  { className, children, activeValue, multiple, onChange, menuStyle, itemsStyle }: IMenu<Value>,
  boxRef: Ref<HTMLUListElement>
) => {
  const ctx = useMemo<TMenuContext<Value>>(
    () => ({ activeValue: getActiveItem(activeValue), multiple, onChange, itemsStyle }),
    [activeValue, itemsStyle, multiple, onChange]
  );

  return (
    <StyledMenu ref={boxRef} className={combineClassNames(className, MENU_CN)} {...{ menuStyle }}>
      <MenuProvider value={ctx}>{children}</MenuProvider>
    </StyledMenu>
  );
};

export const Menu = forwardRef<HTMLUListElement, IMenu>(MenuComponent) as unknown as TMenuForwardRef;

Menu.displayName = 'Menu';
Menu.Item = MenuItem;
