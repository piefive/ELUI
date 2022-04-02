import { Portal } from 'components/Portal';

import type { TDialog } from './types';
import { useDialogVisible } from './hooks';
import { DIALOG_PORTAL_NAME } from './constants';

export const Dialog = ({ name, isOpen, onClose }: TDialog) => {
  const isVisible = useDialogVisible(name, isOpen);

  return (
    <Portal name={DIALOG_PORTAL_NAME}>
      <div />
    </Portal>
  );
};
