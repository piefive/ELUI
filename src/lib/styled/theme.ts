import { palette } from './palette';
import { FONT_FAMILY } from './font-family';
import { media } from './media';

export const theme = {
  palette,
  media,
  fontFamily: FONT_FAMILY,
};

export type TTheme = typeof theme;
