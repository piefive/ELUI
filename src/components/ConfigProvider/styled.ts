import styled from 'styled-components';

import type { TConfigProviderProps } from './types';

const DEFAULT_FONT_URL =
  'https://fonts.gstatic.com/s/didactgothic/v18/ahcfv8qz1zt6hCC5G4F_P4ASlU-YpnLl.woff2';

export const StyledFont = styled.div<Pick<TConfigProviderProps, 'fontURL'>>`
  @font-face {
    font-family: 'Didact Gothic';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${({ fontURL }) => fontURL ?? DEFAULT_FONT_URL}) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
`;
