import styled, { css } from 'styled-components';

import { scrollBarMixin } from 'lib';

export const StyledOptions = styled.div`
  max-height: 252px;
  overflow-y: auto;

  ${scrollBarMixin}
`;

export const fieldMixin = css`
  &:not([disabled]) {
    cursor: pointer;
  }
`;
