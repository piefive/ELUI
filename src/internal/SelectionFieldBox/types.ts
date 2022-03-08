import type { ReactNode } from 'react';

import type { TFieldBox } from '../FieldBox';

export type TSelectionFieldVariant = 'primary' | 'secondary';

export interface ISelectionFieldBox extends Omit<TFieldBox, 'isRequired' | 'onLabelClick'> {
  variant?: TSelectionFieldVariant;
  children: ReactNode;
  boxClassName?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
}
