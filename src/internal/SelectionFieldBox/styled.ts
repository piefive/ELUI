import styled, { css } from 'styled-components';

import { Typography } from 'components/Typography';

import type { ISelectionFieldBox, TSelectionFieldVariant } from './types';

type TStyledSelectionControl = Pick<ISelectionFieldBox, 'isDisabled' | 'isChecked'> & {
  variant: TSelectionFieldVariant;
};

export const StyledSelectionBox = styled.label<TStyledSelectionControl>`
  display: flex;
  width: fit-content;
  min-width: ${({ variant }) => (variant === 'secondary' ? '280px' : 'auto')};
  margin: 0;
  padding: ${({ variant }) => (variant === 'secondary' ? '16px' : 0)};
  transition-property: background-color, box-shadow, color;
  transition-timing-function: ease-out;
  transition-duration: 0.3s;
  border-radius: 8px;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ theme, variant }) => (variant === 'secondary' ? theme.palette.grey_200 : 'transparent')};
  color: ${({ theme, isDisabled }) => (isDisabled ? theme.palette.grey_400 : theme.palette.grey_900)};
  box-shadow: ${({ theme, variant, isChecked, isDisabled }) =>
    variant === 'secondary' && isChecked && !isDisabled ? `0 0 0 4px ${theme.palette.primary_700}` : 'none'};
`;

export const StyledSelectionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  color: inherit;
`;

export const StyledDescription = styled(Typography)<{ isDisabled?: boolean }>`
  color: ${({ theme, isDisabled }) => (isDisabled ? 'inherit' : theme.palette.grey_700)};
`;
