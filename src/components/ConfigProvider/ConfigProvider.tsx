import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'lib';

import type { TConfigProviderProps } from './types';
import { StyledFont } from './styled';

export const ConfigProvider: FC<TConfigProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledFont />
      {children}
    </ThemeProvider>
  );
};
