import type { ReactNode } from 'react';

import type { TStyledComponentsProps } from 'lib';

export type TScrollContainerRef = {
  scrollTo: (left: number, contentWidth?: number) => void;
};

export type TScrollContainer = {
  className?: string;
  dragOnly?: boolean;
  scrollAfterReachedBoundaries?: boolean;
  boxStyle?: TStyledComponentsProps;
  onScroll?: (x: number) => void;
  children: ReactNode;
};
