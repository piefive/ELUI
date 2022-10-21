import type { ReactNode } from 'react';

import type { IButton } from 'components/Button';
import type { TStyledComponentsProps } from 'lib';

export type TEmpty = {
  className?: string;
  placement?: 'left' | 'center';
  title: string;
  description?: string;
  image?: string | ReactNode;
  primaryBtn?: Omit<IButton, 'variant'>;
  secondaryBtn?: Omit<IButton, 'variant'>;
  boxStyle?: TStyledComponentsProps;
  imageStyle?: TStyledComponentsProps;
  semantics?: string;
};
