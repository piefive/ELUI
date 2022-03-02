import styled from 'styled-components';

import { tabletMedia } from 'lib';

export const StyledResizeCorner = styled.div`
  position: absolute;
  display: none;
  padding-right: 2px;
  inset: auto 0 0 auto;
  cursor: row-resize;
  pointer-events: none;

  @media (${tabletMedia}) {
    display: block;
    pointer-events: all;
  } ;
`;
