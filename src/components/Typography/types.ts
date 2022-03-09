import type { ElementType, MouseEvent, ReactNode } from 'react';
import type { DefaultTheme } from 'styled-components';

import type { TStyledComponentsProps } from 'lib';

export type TTypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'st1'
  | 'st2'
  | 'b1'
  | 'b2'
  | 'caption'
  | 'overline';

type TBaseTypography = {
  variant?: TTypographyVariant;
  className?: string;
  children?: ReactNode;
  onClick?: (event: MouseEvent) => void;
  color?: keyof DefaultTheme['palette'] | 'inherit';
  typographyStyle?: TStyledComponentsProps;
};

interface TAnchor extends Omit<Partial<HTMLAnchorElement>, 'children'> {
  tag: Extract<ElementType, 'a'>;
}

export type TTypography = (TAnchor | { tag?: Exclude<ElementType, 'a'> }) & TBaseTypography;
