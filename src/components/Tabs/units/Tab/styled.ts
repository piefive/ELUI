import styled, { css } from 'styled-components';

import { getComponentStyle } from 'lib';

import type { TTabStyle } from '../../types';

export const StyledTab = styled.button<{
  isActive: boolean;
  boxStyle?: TTabStyle;
  segmentStyle?: TTabStyle;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 40px;
  height: 40px;
  margin: 4px 0;
  padding: 8px;
  border-radius: 8px;
  border: none;
  background-color: transparent;
  cursor: default;
  white-space: nowrap;
  transition-property: background-color, color;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  z-index: 1;

  &:focus {
    outline: none;
  }

  ${({ isActive, theme }) =>
    !isActive &&
    css`
      &:not(:disabled):hover {
        cursor: pointer;
        background-color: ${theme.palette.grey_200};
        color: ${theme.palette.primary_700};
      }
    `}

  ${({ theme, isActive, boxStyle, segmentStyle }) => {
    const cssProps = { theme, isActive };

    return css`
      ${getComponentStyle(boxStyle, cssProps)};
      ${getComponentStyle(segmentStyle, cssProps)};
    `;
  }}
`;

export const StyledLeftSlot = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
`;
