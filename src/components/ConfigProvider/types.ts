import type { ReactNode } from 'react';

export type TConfigProviderProps = {
  children: ReactNode;
  fontURL?: string;
  paintWorklets?: string[];
};
