import { Context, createContext, useContext } from 'react';

import type { TMenuContext, TMenuValue } from '../types';

type TContext<Value extends TMenuValue> = Context<TMenuContext<Value>>;

const MenuContext = createContext<TMenuContext>(null);
MenuContext.displayName = 'MenuProvider';

export const MenuProvider = MenuContext.Provider;

export const useMenuContext = <Value extends TMenuValue>() => useContext(<TContext<Value>>(MenuContext as unknown));
