import 'styled-components';

// noinspection ES6PreferShortImport
import { theme } from '../src/lib/styled/theme';

declare module 'styled-components' {
  type TTheme = typeof theme;

  export interface DefaultTheme extends TTheme {}
}
