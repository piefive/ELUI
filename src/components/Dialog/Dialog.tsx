import type { TDialog } from './types';
import { useDialogVisible } from './hooks';

export const Dialog = ({ name, isOpen, onClose }: TDialog) => {
  const isVisible = useDialogVisible(name, isOpen);

  console.log(isVisible);

  return <div />;
};
