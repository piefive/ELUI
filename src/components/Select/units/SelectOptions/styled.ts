import styled from 'styled-components';

import { scrollBarMixin } from 'lib';

export const StyledOptions = styled.div`
  max-height: 252px;
  overflow-y: auto;

  ${scrollBarMixin}
`;
