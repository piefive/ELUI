import styled from 'styled-components';

import { getComponentStyle, normalizeMixin } from 'lib';

import type { ISegmentedControlComponent } from './types';

export const StyledSegmentedControlBox = styled.div<Pick<ISegmentedControlComponent, 'boxStyle'>>`
  ${normalizeMixin};

  position: relative;
  display: flex;
  flex-flow: row nowrap;
  gap: 4px;
  padding: 4px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.grey_200};

  ${({ theme, boxStyle }) => getComponentStyle(boxStyle, { theme })}
`;
