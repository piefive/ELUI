import { Context, createContext, useContext } from 'react';

import type { TTabValue, TTabsContext } from '../types';

const TabsContext = createContext<TTabsContext>(<TTabsContext>{});
TabsContext.displayName = 'TabsContext';

export const TabsProvider = TabsContext.Provider;

export const useTabsContext = <TabValue = TTabValue>() =>
  useContext<TTabsContext<TabValue>>(<Context<TTabsContext<TabValue>>>(TabsContext as unknown));
