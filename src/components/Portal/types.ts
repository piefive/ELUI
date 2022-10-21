import type { ReactNode } from 'react';

export type TPortal = {
  name: string;
  semantics?: string;
  children: ReactNode;
};
