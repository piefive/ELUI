import styled, { DefaultTheme, css } from 'styled-components';

import { TStyledComponentsProps, getComponentStyle, hexToRgba, normalizeMixin } from 'lib';

import { SWITCH_OFFSET, SWITCH_WIDTH, TOGGLE_WIDTH } from './constants';
import type { TStyledToggleProps } from './types';

type TStyledSwitch = {
  checked: boolean;
  disabled: boolean;
  isLoading: boolean;
  boxStyle?: TStyledComponentsProps;
};

const switchStyleMixin = ({ theme, checked, disabled, isLoading }: TStyledSwitch & { theme: DefaultTheme }) => {
  if (isLoading)
    return css`
      cursor: progress;
      background-color: ${theme.palette.primary_700};
    `;

  if (disabled)
    return css`
      cursor: not-allowed;
      background-color: ${theme.palette.grey_100};
    `;

  const focusStyle = css`
    &:focus {
      box-shadow: 0 0 0 4px ${theme.palette.primary_200};
    }
  `;

  if (checked)
    return css`
      background-color: ${theme.palette.primary_700};

      ${focusStyle};

      &:hover {
        background-color: ${theme.palette.primary_400};
      }
    `;

  return css`
    background-color: ${theme.palette.grey_200};

    ${focusStyle};

    &:active {
      background-color: ${theme.palette.grey_200};
    }

    &:hover {
      background-color: ${theme.palette.grey_300};
    }
  `;
};

const toggleStyleMixin = css`
  width: ${TOGGLE_WIDTH}px;
  height: 20px;
  border-radius: 2px;
`;

export const StyledToggle = styled.div<{ disabled?: boolean; checked: boolean; toggleStyle?: TStyledToggleProps }>`
  ${toggleStyleMixin};

  position: relative;
  background-color: ${({ theme, disabled }) => (disabled ? theme.palette.grey_400 : theme.palette.white)};

  &:not([disabled]) {
    box-shadow: ${({ theme }) =>
      `0 4px 8px ${hexToRgba(theme.palette.black, 0.04)}, 0 0 2px ${hexToRgba(
        theme.palette.black,
        0.06
      )}, 0 0 1px ${hexToRgba(theme.palette.black, 0.04)}`};
  }

  &::after {
    position: absolute;
    content: '';
    ${toggleStyleMixin};
    left: 0;
    right: 0;
    transition: left 0.3s ease-in-out;
    background-color: ${({ theme, disabled }) => (disabled ? theme.palette.grey_400 : theme.palette.white)};
  }

  ${({ theme, checked, toggleStyle }) => getComponentStyle(toggleStyle, { theme, checked })};
`;

export const StyledSwitch = styled.button<TStyledSwitch>`
  ${normalizeMixin};

  position: relative;
  width: ${SWITCH_WIDTH}px;
  height: 24px;
  padding: ${SWITCH_OFFSET}px;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  overflow: hidden;
  box-shadow: 0 0 0 4px transparent;
  transition-property: background-color, box-shadow;
  transition-duration: 0.33s;
  transition-timing-function: ease-out;

  &:focus {
    outline: none;
  }

  &:not(:disabled):not([aria-busy='true']):active {
    ${StyledToggle}::after {
      left: ${({ checked }) => (checked ? -8 : 8)}px;
    }
  }

  ${switchStyleMixin};

  ${({ theme, boxStyle }) => getComponentStyle(boxStyle, { theme })};
`;
