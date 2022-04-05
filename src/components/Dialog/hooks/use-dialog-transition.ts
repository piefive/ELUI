import { useTransition } from 'react-spring';

import { useIsomorphicLayoutEffect } from 'lib';

import type { TDialogVariant } from '../types';

const getModalTransitionFrom = (isBottomSheet: boolean) => ({
  x: '-50%',
  y: isBottomSheet ? '100%' : '-60%',
  opacity: isBottomSheet ? 1 : 0,
});

const getModalTransitionTo = (isBottomSheet: boolean) => ({
  x: '-50%',
  y: isBottomSheet ? '0%' : '-50%',
  opacity: 1,
});

export const useDialogTransition = (variant: TDialogVariant, isOpen: boolean) => {
  const isBottomSheet = variant === 'bottom-sheet';

  const [dialogTransition, { set }] = useTransition(
    isOpen,
    {
      from: getModalTransitionFrom(isBottomSheet),
      enter: getModalTransitionTo(isBottomSheet),
      leave: getModalTransitionFrom(isBottomSheet),
    },
    [isOpen]
  );

  useIsomorphicLayoutEffect(() => {
    if (isOpen) set(getModalTransitionTo(isBottomSheet));
  }, [isBottomSheet]);

  return dialogTransition;
};
