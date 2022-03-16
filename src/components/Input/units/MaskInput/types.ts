import type { Ref } from 'react';
import type { IMask } from 'react-imask';

import type { IInputField } from '../../types';

export interface IMaskInput extends IInputField {
  inputRef?: Ref<HTMLInputElement>;
  maskOptions: IMask.AnyMaskedOptions;
}
