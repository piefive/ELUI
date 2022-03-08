import { createContext, useContext } from 'react';

import type { TCheckboxContext } from '../types';

const CheckboxContext = createContext<TCheckboxContext>(<TCheckboxContext>{});

export const CheckboxProvider = CheckboxContext.Provider;

export const useCheckboxContext = () => useContext<TCheckboxContext>(CheckboxContext);
