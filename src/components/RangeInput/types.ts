import type { ChangeEventHandler, InputHTMLAttributes } from 'react';

import type { TFieldBox } from 'internal';

type TRangeInputField = Pick<
  TFieldBox,
  'className' | 'label' | 'isRequired' | 'validate' | 'validateMessage' | 'message' | 'boxStyle'
>;

export interface IRangeInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'placeholder'>,
    TRangeInputField {
  min?: number;
  max?: number;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
