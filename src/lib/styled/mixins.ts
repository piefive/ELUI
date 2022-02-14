import { css } from 'styled-components';

export const normalizeMixin = css`
  &,
  * {
    box-sizing: border-box;
  }

  color: ${({ theme }) => theme.palette.grey_900};
  font-family: ${({ theme }) => theme.fontFamily};
`;
