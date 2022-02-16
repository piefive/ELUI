import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'lib';

import type { TConfigProviderProps } from './types';
import { StyledFont } from './styled';
import { usePaintWorklet } from './hooks';

export const ConfigProvider: FC<TConfigProviderProps> = ({ children, fontURL, paintWorkletsPath }) => {
  usePaintWorklet(paintWorkletsPath);

  return (
    <ThemeProvider theme={theme}>
      <StyledFont url={fontURL} />
      {children}
    </ThemeProvider>
  );
};
