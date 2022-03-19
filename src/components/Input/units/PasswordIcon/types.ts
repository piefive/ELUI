import type { Dispatch, SetStateAction } from 'react';

export type TPasswordIcon = {
  inputType: HTMLInputElement['type'];
  setInputType: Dispatch<SetStateAction<'password' | 'text'>>;
};
