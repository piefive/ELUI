import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

import type { TStyledComponentsProps } from 'lib';

export type TButtonVariant = 'primary' | 'white' | 'outline' | 'custom';

export type TButtonStyle = {
  variant?: TButtonVariant;
  buttonStyle?: TStyledComponentsProps;
};

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>, TButtonStyle {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}
