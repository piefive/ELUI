import { useEffect, useState } from 'react';

import { useUpdateEffect } from 'lib';

import { dialogObserver } from '../utils';

export const useDialogVisible = (name?: string, isOpen = false) => {
  const [isVisible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (name) dialogObserver.subscribe(name, setVisible);

    return () => {
      if (name) dialogObserver.unsubscribe(name, setVisible);
    };
  }, [name]);

  useUpdateEffect(() => {
    setVisible(isOpen);
  }, [isOpen]);

  return isVisible;
};
