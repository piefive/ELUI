import { useTransition } from 'react-spring';

import type { TDialogOverlay } from './types';
import { StyledDialogOverlay } from './styled';

export const DialogOverlay = ({ isOpen, zIndex, onClose }: TDialogOverlay) => {
  const transition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return transition(
    (style, item) => item && <StyledDialogOverlay style={{ ...style, zIndex: zIndex - 1 }} onClick={onClose} />
  );
};
