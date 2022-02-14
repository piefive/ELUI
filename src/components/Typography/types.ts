import type { ElementType, MouseEvent, ReactNode } from 'react';

import type { TStyledComponentsProps } from 'lib';

export type TTypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle'
  | 'subtitle_bold'
  | 'body_bold'
  | 'body_normal'
  | 'body_low'
  | 'caption'
  | 'overline';

type TBaseTypography = {
  variant?: TTypographyVariant;
  className?: string;
  children?: ReactNode;
  onClick?: (event: MouseEvent) => void;
  typographyStyle?: TStyledComponentsProps;
};

interface TAnchor extends Omit<Partial<HTMLAnchorElement>, 'children'> {
  tag: Extract<ElementType, 'a'>;
}

export type TTypography = (TAnchor | { tag?: Exclude<ElementType, 'a'> }) &
  TBaseTypography;
