import type { MouseEvent, ReactNode } from 'react';

import type { TStyledComponentsProps } from 'lib';

export type TDialogVariant = 'modal' | 'bottom-sheet';

export type TDialog = {
  name?: string;
  isOpen?: boolean;
  className?: string;
  onClose?: (event: MouseEvent) => void;
  onAfterVisibleChange?: (isVisible: boolean) => void;
  variant?: TDialogVariant;
  zIndex?: number;
  withHeader?: boolean;
  withOverlay?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  boxStyle?: TStyledComponentsProps;
  headerStyle?: TStyledComponentsProps;
  bodyStyle?: TStyledComponentsProps;
  footerStyle?: TStyledComponentsProps;
  semantics?: string;
};
