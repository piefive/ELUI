import type { ElementType, HTMLAttributes, MouseEvent, ReactNode } from 'react';

import type { TStyledComponentsProps } from 'lib';

export type TStyledBox = {
  boxStyle?: TStyledComponentsProps;
  childBoxStyle?: TStyledComponentsProps;
  onClick?: (event: MouseEvent) => void;
};

export interface IBox extends Omit<HTMLAttributes<HTMLElement>, 'onClick'>, TStyledBox {
  tag?: ElementType;
  className?: string;
  children?: ReactNode;
  semantics?: string;
}
