import styled from 'styled-components';

import { getComponentStyle, normalizeMixin } from 'lib';

import type { ITabsComponent } from './types';

export const StyledTabsBox = styled.div<Pick<ITabsComponent, 'boxStyle'>>`
  ${normalizeMixin};

  position: relative;
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;

  ${({ theme, boxStyle }) => getComponentStyle(boxStyle, { theme })}
`;

export const StyledActiveLine = styled.div<Pick<ITabsComponent, 'activeLineStyle'>>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  border-radius: 2px 2px 0 0;
  transition-property: left, width;
  transition-duration: 0.2s;
  background-color: ${({ theme }) => theme.palette.primary_700};

  ${({ activeLineStyle, theme }) => getComponentStyle(activeLineStyle, { theme })}
`;
