import { createContext, useContext } from 'react';

import type { TSegmentedControlContext } from '../types';

const SegmentedControlContext = createContext<TSegmentedControlContext>(<TSegmentedControlContext>{});
SegmentedControlContext.displayName = 'SegmentedControlContext';

export const SegmentedControlProvider = SegmentedControlContext.Provider;

export const useSegmentedControlContext = () => useContext(SegmentedControlContext);
