import { CSSProperties, Dispatch, Ref, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import { usePopper } from 'react-popper';

import { useClickOutside, useUpdateEffect, useWindowSize } from 'lib';

import type { TPopoverContext, TPopoverOptions } from '../types';

type TUsePopover<T extends HTMLElement> = TPopoverContext & {
  targetRef: Ref<T>;
  popper: {
    ref: Dispatch<SetStateAction<HTMLElement | null>>;
    style: CSSProperties;
  };
};

const DEFAULT_OFFSET: TPopoverOptions['offset'] = [0, 10];

export const usePopover = <T extends HTMLElement = HTMLElement>({
  disabled,
  forceUpdateTarget,
  placement = 'bottom-start',
  outsideRefs,
  onClose,
  checkTargetWidth = false,
  offset = DEFAULT_OFFSET,
}: TPopoverOptions): TUsePopover<T> => {
  const { width: windowWidth } = useWindowSize();
  const [isPopoverOpen, setOpen] = useState<boolean>(false);
  const [targetElement, setTargetRef] = useState<T | null>(null);
  const [popperRef, setPopperRef] = useState<HTMLElement | null>(null);

  const modifiers = useMemo(() => [{ name: 'offset', options: { offset } }], [offset]);

  const { styles, attributes, forceUpdate } = usePopper(targetElement, popperRef, { placement, modifiers });

  const outsideMemoRefs = useMemo(() => {
    const refs = [{ current: popperRef }, { current: targetElement }];

    if (Array.isArray(outsideRefs)) return [...refs, ...outsideRefs];

    return refs;
  }, [outsideRefs, popperRef, targetElement]);

  const handleToggle = useCallback(() => {
    if (!disabled) {
      setOpen(!isPopoverOpen);

      if (isPopoverOpen && onClose) onClose();
    }
  }, [disabled, isPopoverOpen, onClose]);

  const handleClose = useCallback(() => {
    setOpen(false);

    if (isPopoverOpen && onClose) onClose();
  }, [isPopoverOpen, onClose]);

  useClickOutside(handleClose, outsideMemoRefs);

  useUpdateEffect(() => {
    if (forceUpdateTarget && forceUpdate) forceUpdate();
  }, [forceUpdateTarget]);

  useEffect(() => {
    if (isPopoverOpen && disabled) setOpen(false);
  }, [disabled, isPopoverOpen]);

  useUpdateEffect(() => {
    handleClose();
  }, [windowWidth]);

  return {
    isPopoverOpen,
    setOpen,
    onToggle: handleToggle,
    targetRef: setTargetRef,
    popper: {
      ref: setPopperRef,
      style: {
        ...styles.popper,
        width: checkTargetWidth ? targetElement?.clientWidth ?? 0 : 280,
      },
      ...attributes.popper,
    },
  };
};
