import type { ReactNode } from 'react';

import type { TSegmentStyle } from '../../types';

export type TSegment = {
  name?: string;
  value: string;
  leftSlot?: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  boxStyle?: TSegmentStyle;
};
