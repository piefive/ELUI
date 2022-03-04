import styled from 'styled-components';

import { TStyledComponentsProps, getComponentStyle, normalizeMixin } from 'lib';

export const StyledBox = styled.div<{
  scrollContainerStyle?: TStyledComponentsProps;
}>`
  ${normalizeMixin};

  overflow: hidden;
  user-select: none;
  touch-action: pan-y;

  ${({ theme, scrollContainerStyle }) => getComponentStyle(scrollContainerStyle, { theme })};
`;

export const StyledContent = styled.div`
  display: inline-flex;
  width: 100%;
`;
