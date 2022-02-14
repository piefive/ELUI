import styled from 'styled-components';

import type { TConfigProviderProps } from './types';

const DEFAULT_FONT_URL = '/fonts/fonts.css';

export const StyledFont = styled.div<Pick<TConfigProviderProps, 'fontURL'>>`
  @import url('${({ fontURL }) => fontURL ?? DEFAULT_FONT_URL}');
`;
