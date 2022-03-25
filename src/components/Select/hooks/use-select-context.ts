import { Context, createContext, useContext } from 'react';

import type { TSelectContext, TSelectValue } from '../types';

const SelectContext = createContext<TSelectContext>(null);

export const SelectProvider = SelectContext.Provider;

export const useSelectContext = <SelectValue = TSelectValue>() =>
  useContext<TSelectContext<SelectValue>>(<Context<TSelectContext<SelectValue>>>(SelectContext as unknown));
