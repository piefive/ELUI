import styled, { css } from 'styled-components';

import { BOX_CN } from 'components/Box/constants';
import { getComponentStyle, normalizeMixin } from 'lib';

import type { TStyledBox } from './types';

export const StyledBox = styled.div<TStyledBox>`
  ${normalizeMixin};

  display: flex;
  margin: 0;
  padding: 0;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

  ${({ theme, childBoxStyle }) =>
    childBoxStyle &&
    css`
      .${BOX_CN} {
        ${getComponentStyle(childBoxStyle, { theme })};
      }
    `};

  ${({ theme, boxStyle }) => getComponentStyle(boxStyle, { theme })};
`;
