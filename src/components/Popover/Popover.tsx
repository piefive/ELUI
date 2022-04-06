import { Fragment, Ref, createElement, forwardRef, useImperativeHandle, useMemo } from 'react';
import { useTransition } from 'react-spring';

import { combineClassNames, createEventFn, isFn } from 'lib';
import { Portal } from 'components/Portal';

import type { TPopover, TPopoverContext, TPopoverForwardRef } from './types';
import { POPOVER_CN, POPOVER_TARGET_CN } from './constants';
import { PopoverProvider, usePopover } from './hooks';
import { StyledAnimateContainer, StyledPopover, StyledPopoverTarget } from './styled';

const preventedFn = createEventFn();

const PopoverComponent = <T extends HTMLElement = HTMLDivElement>(
  {
    children,
    popover,
    popoverStyle,
    targetStyle,
    className,
    animate = true,
    isPortal = true,
    isPopoverVisible = true,
    onClose,
    animateContainerStyle,
    zIndex = 21,
    ...popoverOptions
  }: TPopover<T>,
  popoverRef: Ref<TPopoverContext>
) => {
  const instance = usePopover<T>({ onClose, ...popoverOptions });

  const { popper, isPopoverOpen, setOpen, onToggle, forceUpdate, targetRef } = instance;
  const { ref, style, ...popperProps } = popper;

  const transitionStyle = useTransition(isPopoverOpen, {
    from: { scale: 0.6 },
    enter: { scale: 1, opacity: 1 },
    leave: { scale: 0.6, opacity: 0 },
    config: { tension: 300 },
    immediate: !animate,
  });

  const ctx = useMemo(
    () => ({ isPopoverOpen, onToggle, setOpen, forceUpdate }),
    [forceUpdate, isPopoverOpen, onToggle, setOpen]
  );

  useImperativeHandle(popoverRef, () => ctx, [ctx]);

  return (
    <PopoverProvider value={ctx}>
      {isFn(children) ? (
        children({ ref: targetRef, ...ctx })
      ) : (
        <StyledPopoverTarget
          ref={targetRef}
          className={POPOVER_TARGET_CN}
          isOpen={isPopoverOpen}
          onClick={onToggle}
          {...{ targetStyle }}
        >
          {children}
        </StyledPopoverTarget>
      )}
      {isPopoverVisible &&
        createElement(
          isPortal ? Portal : Fragment,
          isPortal ? { name: POPOVER_CN } : null,
          transitionStyle(
            (transitionStyle, item) =>
              item && (
                <StyledAnimateContainer
                  {...{ ref, ...popperProps }}
                  styled={animateContainerStyle}
                  style={{ ...style, ...transitionStyle, zIndex }}
                >
                  <StyledPopover
                    className={combineClassNames(className, POPOVER_CN)}
                    onClick={preventedFn}
                    {...{ ...popperProps, isPopoverOpen, popoverStyle }}
                  >
                    {popover}
                  </StyledPopover>
                </StyledAnimateContainer>
              )
          )
        )}
    </PopoverProvider>
  );
};

export const Popover = forwardRef<TPopoverContext, TPopover>(PopoverComponent) as TPopoverForwardRef;

Popover.displayName = 'Popover';
