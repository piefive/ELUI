import styled, { DefaultTheme, css } from 'styled-components';

import { normalizeMixin } from 'lib';
import { Button } from 'components/Button';

import type { TChipScheme, TChipVariant } from './types';

type TStyledChip = {
  variant: TChipVariant;
  scheme: TChipScheme;
  checked: boolean;
  onClick?: () => void;
};

const BOX_SHADOW_PROP = '0 0 0 4px';

const chipVariantMixin = ({ theme, variant, checked, scheme }: TStyledChip & { theme: DefaultTheme }) => {
  if (variant === 'input') {
    if (checked)
      return css`
        background-color: ${theme.palette.primary_700};
        border-color: ${theme.palette.primary_700};
        color: ${theme.palette.white};

        &:hover {
          background-color: ${theme.palette.primary_400};
          border-color: ${theme.palette.primary_400};
        }

        &:focus {
          background-color: ${theme.palette.primary_700};
          border-color: ${theme.palette.primary_700};
          box-shadow: ${BOX_SHADOW_PROP} ${theme.palette.primary_200};
        }

        &:active {
          background-color: ${theme.palette.primary_800};
          border-color: ${theme.palette.primary_800};
          box-shadow: none;
        }
      `;

    return css`
      background-color: ${theme.palette.white};
      border-color: ${theme.palette.primary_700};

      &:hover {
        background-color: ${theme.palette.primary_100};
        border-color: ${theme.palette.primary_400};
      }

      &:focus {
        background-color: ${theme.palette.white};
        box-shadow: ${BOX_SHADOW_PROP} ${theme.palette.primary_200};
      }

      &:active {
        background-color: ${theme.palette.primary_100};
        border-color: ${theme.palette.primary_700};
        box-shadow: none;
      }
    `;
  }

  if (variant === 'default') {
    if (scheme === 'error')
      return css`
        background-color: ${theme.palette.error};
        color: ${theme.palette.white};
      `;

    if (scheme === 'success')
      return css`
        background-color: ${theme.palette.success};
        color: ${theme.palette.white};
      `;

    return css`
      background-color: ${theme.palette.grey_200};
      color: ${theme.palette.grey_900};
    `;
  }

  return '';
};

export const StyledChip = styled.div<TStyledChip>`
  ${normalizeMixin};

  position: relative;
  width: fit-content;
  padding: 4px 4px 4px 8px;
  border-radius: 8px;
  border: 2px solid transparent;
  transition-property: border-color, background-color, color, box-shadow;
  transition-timing-function: ease-out;
  transition-duration: 0.3s;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

  &:focus {
    outline: none;
  }

  ${chipVariantMixin};
`;

export const StyledChipContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledDeleteButton = styled(Button)<{ isWhite: boolean }>`
  margin-left: 4px;
  padding: 0;
  border: 0;
  background-color: transparent;
  color: inherit;

  &:not(:disabled):hover {
    background-color: ${({ theme, isWhite }) => (isWhite ? theme.palette.white : theme.palette.primary_700)};
    color: ${({ theme, isWhite }) => (isWhite ? theme.palette.grey_900 : theme.palette.white)};
  }
`;
