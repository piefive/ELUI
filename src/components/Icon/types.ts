import type { ReactNode, SyntheticEvent } from 'react';

import type { TStyledComponentsProps } from 'lib';

export type TIcon = {
  className?: string;
  viewBox?: string;
  size?: number;
  children: ReactNode;
  iconStyle?: TStyledComponentsProps;
  onClick?: (e: SyntheticEvent<SVGSVGElement>) => void;
  onMouseDown?: (e: SyntheticEvent<SVGSVGElement>) => void;
  onMouseUp?: (e: SyntheticEvent<SVGSVGElement>) => void;
  semantics?: string;
};
