import { createContext, useContext } from 'react';

import type { TCheckboxContext } from '../types';

const CheckboxContext = createContext<TCheckboxContext>(<TCheckboxContext>{});
CheckboxContext.displayName = 'CheckboxProvider';

export const CheckboxProvider = CheckboxContext.Provider;

export const useCheckboxContext = () => useContext<TCheckboxContext>(CheckboxContext);
