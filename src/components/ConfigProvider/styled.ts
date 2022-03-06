import { createGlobalStyle } from 'styled-components';

const DEFAULT_FONT_URL = '/fonts/fonts.css';

export const StyledFont = createGlobalStyle<{ url?: string }>`
  @import url('${({ url }) => url ?? DEFAULT_FONT_URL}');
`;
