import type { Ref } from 'react';
import type { IMask } from 'react-imask';

import type { IInputFieldWithMask } from '../../types';

export interface IMaskInput extends IInputFieldWithMask {
  inputRef?: Ref<HTMLInputElement>;
  maskOptions: IMask.AnyMaskedOptions;
}
