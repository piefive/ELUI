import styled, { css } from 'styled-components';

import { Typography } from 'components/Typography';

export const fieldMixin = css`
  &:not([disabled]) {
    cursor: pointer;
  }
`;

export const StyledPlaceholder = styled(Typography)`
  position: absolute;
  color: ${({ theme }) => theme.palette.grey_700};
`;
