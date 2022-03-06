import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'lib';

import type { TConfigProviderProps } from './types';
import { useImportFonts, usePaintWorklet } from './hooks';

export const ConfigProvider: FC<TConfigProviderProps> = ({ children, fontURL, paintWorkletsPath }) => {
  usePaintWorklet(paintWorkletsPath);
  useImportFonts(fontURL);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
