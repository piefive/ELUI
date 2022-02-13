import 'styled-components';

import { theme } from 'lib/styled';

declare module 'styled-components' {
  type TTheme = typeof theme;

  export interface DefaultTheme extends TTheme {}
}
