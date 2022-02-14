import 'styled-components';

// noinspection ES6PreferShortImport
import type { theme } from '../src/lib/styled/theme';

declare module 'styled-components' {
  type TTheme = typeof theme;

  export interface DefaultTheme extends TTheme {}
}
