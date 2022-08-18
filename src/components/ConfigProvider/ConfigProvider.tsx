import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme as defaultTheme } from 'lib';

import type { TConfigProviderProps } from './types';
import { MediaProvider, useImportFonts, usePaintWorklet } from './hooks';

export const ConfigProvider: FC<TConfigProviderProps> = ({
  children,
  fontURL,
  defaultMedia = 'desktop',
  paintWorklets,
  theme = defaultTheme,
}) => {
  usePaintWorklet(paintWorklets);

  useImportFonts(fontURL);

  return (
    <ThemeProvider {...{ theme }}>
      <MediaProvider {...{ defaultMedia }}>{children}</MediaProvider>
    </ThemeProvider>
  );
};
