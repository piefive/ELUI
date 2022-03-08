import type { ReactNode } from 'react';
import type { U } from 'ts-toolbelt';

import type { TStyledComponentsProps } from 'lib';

export type TFieldBox = {
  className?: string;
  label?: string;
  isRequired?: boolean;
  validate?: U.Nullable<boolean>;
  validateMessage?: string;
  message?: string;
  children?: ReactNode;
  onLabelClick?: () => void;
  boxStyle?: TStyledComponentsProps;
};
