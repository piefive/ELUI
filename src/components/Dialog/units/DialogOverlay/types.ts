import type { MouseEvent } from 'react';

export type TDialogOverlay = {
  isOpen: boolean;
  zIndex: number;
  onClose?: (event: MouseEvent) => void;
};
