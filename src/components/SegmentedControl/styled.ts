import styled from 'styled-components';

import { getComponentStyle, normalizeMixin } from 'lib';

import type { ISegmentedControlComponent } from './types';

export const StyledSegmentedControlBox = styled.div<Pick<ISegmentedControlComponent, 'boxStyle' | 'isScrollable'>>`
  ${normalizeMixin};

  position: relative;
  max-width: ${({ isScrollable }) => (isScrollable ? '100%' : 'auto')};

  ${({ theme, boxStyle }) => getComponentStyle(boxStyle, { theme })}
`;

export const StyledSegmentedControlList = styled.ul<Pick<ISegmentedControlComponent, 'listStyle'>>`
  display: flex;
  flex-flow: row nowrap;
  gap: 4px;
  padding: 4px;
  margin: 0;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.grey_200};

  ${({ theme, listStyle }) => getComponentStyle(listStyle, { theme })}
`;
