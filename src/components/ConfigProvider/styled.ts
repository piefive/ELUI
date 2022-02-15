import styled from 'styled-components';

const DEFAULT_FONT_URL = '/fonts/fonts.css';

export const StyledFont = styled.div<{ url?: string }>`
  @import url('${({ url }) => url ?? DEFAULT_FONT_URL}');
`;
