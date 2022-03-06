import styled from 'styled-components';

import { TStyledComponentsProps, getComponentStyle, normalizeMixin } from 'lib';

export const StyledBox = styled.div<{ boxStyle?: TStyledComponentsProps }>`
  ${normalizeMixin};

  overflow: hidden;
  user-select: none;
  touch-action: pan-y;

  ${({ theme, boxStyle }) => getComponentStyle(boxStyle, { theme })};
`;

export const StyledContent = styled.div`
  display: inline-flex;
  width: 100%;
`;
