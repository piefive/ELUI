import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'lib';

import type { TConfigProviderProps } from './types';
import { MediaProvider, useImportFonts, usePaintWorklet } from './hooks';

export const ConfigProvider: FC<TConfigProviderProps> = ({ children, fontURL, paintWorklets }) => {
  usePaintWorklet(paintWorklets);
  useImportFonts(fontURL);

  return (
    <ThemeProvider theme={theme}>
      <MediaProvider>{children}</MediaProvider>
    </ThemeProvider>
  );
};
