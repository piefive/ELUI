import type { TDialog, TDialogVariant } from '../../types';

export interface IDialogContent extends Omit<TDialog, 'name' | 'withOverlay'> {
  className: string;
  variant: TDialogVariant;
  isOpen: boolean;
}
