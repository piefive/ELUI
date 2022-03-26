import { useImperativeHandle, useRef } from 'react';

import { usePopoverRef } from 'components/Popover';

export const useSelect = () => {
  const popoverRef = usePopoverRef();
  const selectRef = useRef<HTMLElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(
    selectRef,
    () => ({
      ...containerRef.current,
      focus: () => popoverRef.current.setOpen(true),
    }),
    [popoverRef]
  );

  return { selectRef, containerRef, popoverRef, boxRef };
};
