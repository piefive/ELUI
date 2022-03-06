import styled, { DefaultTheme, css } from 'styled-components';

import { getComponentStyle } from 'lib';

import { Typography } from '../../../Typography';
import type { TSegmentStyle } from '../../types';

const segmentedBoxMixin = ({ isActive, theme }: { theme: DefaultTheme; isActive: boolean }) => {
  const disabledStyle = css`
    &[disabled] {
      background-color: transparent;
      color: ${theme.palette.grey_400};
      cursor: not-allowed;
    }
  `;

  if (isActive)
    return css`
      background-color: ${theme.palette.primary_700};
      color: ${theme.palette.white};

      &:hover {
        background-color: ${theme.palette.primary_400};
        color: ${theme.palette.white};
      }

      &:active {
        background-color: ${theme.palette.primary_800};
        color: ${theme.palette.white};
      }

      ${disabledStyle};
    `;

  return css`
    &:hover {
      background-color: ${theme.palette.primary_100};
      color: ${theme.palette.primary_700};
    }

    &:active {
      background-color: ${theme.palette.primary_200};
      color: ${theme.palette.primary_800};
    }

    ${disabledStyle};
  `;
};

export const StyledSegmentBox = styled.li<{
  isActive: boolean;
  boxStyle?: TSegmentStyle;
  segmentStyle?: TSegmentStyle;
}>`
  display: flex;
  align-items: center;
  position: relative;
  height: 40px;
  padding: 8px;
  margin: 0;
  border-radius: 4px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  list-style: none;
  transition-property: background-color, color;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  z-index: 1;

  &:focus {
    outline: none;
  }

  ${segmentedBoxMixin};

  ${({ theme, isActive, boxStyle, segmentStyle }) => {
    const cssProps = { theme, isActive };

    return css`
      ${getComponentStyle(boxStyle, cssProps)};
      ${getComponentStyle(segmentStyle, cssProps)};
    `;
  }}
`;

export const StyledSegmentRadio = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  visibility: hidden;
  left: -9999px;
`;

export const StyledLeftSlot = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

export const StyledTypography = styled(Typography)`
  display: block;
  font-weight: 500;
  color: inherit;
  padding: 0 8px;
  white-space: nowrap;
`;
