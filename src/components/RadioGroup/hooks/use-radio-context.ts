import { createContext, useContext } from 'react';

import type { TRadioContext } from '../types';

const RadioContext = createContext<TRadioContext>(null);
RadioContext.displayName = 'RadioContext';

export const RadioProvider = RadioContext.Provider;

export const useRadioContext = () => useContext<TRadioContext>(RadioContext);
