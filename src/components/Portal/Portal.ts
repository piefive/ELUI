import { createPortal } from 'react-dom';

import type { TPortal } from './types';
import { usePortal } from './hooks';

export const Portal = ({ name, children }: TPortal) => {
  const box = usePortal(name);

  return box ? createPortal(children, box) : null;
};
