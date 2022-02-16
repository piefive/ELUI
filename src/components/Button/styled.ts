import styled, { DefaultTheme, css } from 'styled-components';

import { getComponentStyle, normalizeMixin } from 'lib';

import { Typography } from '../Typography';

import type { TButtonStyle } from './types';

interface IStyledButton extends TButtonStyle {
  theme: DefaultTheme;
}

const getButtonVariant = ({ theme, variant }: IStyledButton) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${theme.palette.primary_700};
        border-color: ${theme.palette.primary_700};
        color: ${theme.palette.white};

        &:disabled {
          background-color: ${theme.palette.grey_100};
          border-color: ${theme.palette.grey_100};
          color: ${theme.palette.grey_400};
        }

        &:not(:disabled):not(:active):hover,
        &:not(:disabled):not(:active):focus {
          background-color: ${theme.palette.primary_400};
          border-color: ${theme.palette.primary_400};
        }

        &[data-button-enter-pressed='true'],
        &:active {
          background-color: ${theme.palette.primary_700};
          border-color: ${theme.palette.primary_700};
        }
      `;
    case 'white':
      return css`
        background-color: ${theme.palette.white};
        border-color: ${theme.palette.white};
        color: ${theme.palette.grey_900};

        &:disabled {
          background-color: ${theme.palette.white};
          border-color: ${theme.palette.white};
          color: ${theme.palette.grey_400};
        }

        &:not(:disabled):not(:active):hover,
        &:not(:disabled):not(:active):focus {
          background-color: ${theme.palette.grey_200};
          border-color: ${theme.palette.grey_200};
        }

        &[data-button-enter-pressed='true'],
        &:active {
          background-color: ${theme.palette.grey_300};
          border-color: ${theme.palette.grey_300};
        }
      `;
    case 'outline':
      return css`
        background-color: ${theme.palette.white};
        border-color: ${theme.palette.primary_700};
        color: ${theme.palette.grey_900};

        &:disabled {
          background-color: ${theme.palette.white};
          border-color: ${theme.palette.grey_100};
          color: ${theme.palette.grey_400};
        }

        &:not(:disabled):not(:active):hover,
        &:not(:disabled):not(:active):focus {
          background-color: ${theme.palette.primary_100};
          border-color: ${theme.palette.primary_400};
        }

        &[data-button-enter-pressed='true'],
        &:active {
          background-color: ${theme.palette.primary_200};
          border-color: ${theme.palette.primary_800};
        }
      `;
    default:
      return css`
        background-color: transparent;
      `;
  }
};

export const StyledLeftSlot = styled.div`
  margin-right: 10px;
`;

export const StyledRightSlot = styled.div`
  margin-left: 10px;
`;

export const StyledTypography = styled(Typography)<{ isSlotsEmpty: boolean }>`
  display: block;
  font-weight: 500;
  color: inherit;
  padding: ${({ isSlotsEmpty }) => (isSlotsEmpty ? '0 4px' : 0)};
`;

export const StyledButton = styled.button<TButtonStyle>`
  ${normalizeMixin};

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 8px;
  border: 4px solid transparent;
  cursor: pointer;
  user-select: none;
  transition-property: background-color, border-color, color;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;

  &:focus {
    outline: none;
  }

  svg {
    cursor: inherit;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${getButtonVariant};

  ${({ buttonStyle, theme }) => getComponentStyle(buttonStyle, { theme })}
`;
