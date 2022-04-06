import { createContext, useContext } from 'react';

import type { TPopoverContext } from '../types';

const PopoverContext = createContext<TPopoverContext>(null);
PopoverContext.displayName = 'PopoverContext';

export const usePopoverContext = () => useContext<TPopoverContext>(PopoverContext);

export const PopoverProvider = PopoverContext.Provider;
