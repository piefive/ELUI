import type { ReactNode } from 'react';

import type { theme } from 'lib';

export type TMedia = keyof typeof theme.media;

export type TConfigProviderProps = {
  children: ReactNode;
  fontURL?: string;
  defaultMedia?: TMedia;
  paintWorklets?: string[];
};
