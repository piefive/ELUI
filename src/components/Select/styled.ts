import styled, { css } from 'styled-components';

import { scrollBarMixin } from 'lib';

export const StyledOptions = styled.div`
  max-height: 252px;
  overflow-y: auto;

  ${scrollBarMixin}
`;

export const fieldStyleMixin = (withValues: boolean) =>
  withValues
    ? css`
        padding: 6px 6px;
      `
    : undefined;
