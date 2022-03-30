import styled, { css } from 'styled-components';

import { scrollBarMixin } from 'lib';
import { Typography } from 'components/Typography';

export const fieldMixin = css`
  &:not([disabled]) {
    cursor: pointer;
  }
`;

export const StyledOptions = styled.div`
  max-height: 252px;
  overflow-y: auto;

  ${scrollBarMixin}
`;

export const StyledPlaceholder = styled(Typography)`
  position: absolute;
  color: ${({ theme }) => theme.palette.grey_700};
`;
