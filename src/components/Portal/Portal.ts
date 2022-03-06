import { forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { isFn } from 'lib';

import type { TPortal } from './types';
import { usePortal } from './hooks';

export const Portal = forwardRef<HTMLDivElement, TPortal>(({ name, children }, portalRef) => {
  const box = usePortal(name);

  useEffect(() => {
    if (box && portalRef) {
      if (isFn(portalRef)) portalRef(box);
      else portalRef.current = box;
    }
  }, [box, portalRef]);

  return box ? createPortal(children, box) : null;
});
