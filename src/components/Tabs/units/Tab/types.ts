import type { ReactNode } from 'react';

import type { TTabStyle, TTabValue } from '../../types';

export type TTab<TabValue = TTabValue> = {
  className?: string;
  value: TabValue;
  leftSlot?: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  boxStyle?: TTabStyle;
};
