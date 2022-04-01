import styled, { css } from 'styled-components';

import { Typography } from 'components/Typography';

export const fieldMixin = css`
  ${({ isDisabled }: { isDisabled: boolean }) =>
    !isDisabled &&
    css`
      cursor: pointer;
    `}
`;

export const StyledPlaceholder = styled(Typography)<{ isDisabled: boolean }>`
  position: absolute;
  color: ${({ theme, isDisabled }) => (isDisabled ? 'inherit' : theme.palette.grey_700)};
`;
