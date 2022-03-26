import type { Dispatch, ReactElement, ReactNode, Ref, RefObject, SetStateAction } from 'react';
import type { U } from 'ts-toolbelt';
import type { Placement } from '@popperjs/core';
import type { OffsetsFunction } from '@popperjs/core/lib/modifiers/offset';

import type { TStyledComponentsProps } from 'lib';

export type TPopoverTargetStyle = TStyledComponentsProps<{ isOpen: boolean }>;

export type TPopoverContext = {
  isPopoverOpen: boolean;
  onToggle: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

interface IPopoverOptions<T extends HTMLElement> extends TPopoverContext {
  ref: Ref<T>;
}

type TPopoverChildren<T extends HTMLElement = HTMLElement> = (popoverOptions: IPopoverOptions<T>) => ReactNode;

export type TPopoverOptions = {
  disabled?: boolean;
  forceUpdateTarget?: unknown;
  placement?: Placement;
  offset?: OffsetsFunction | [U.Nullable<number>, U.Nullable<number>];
  outsideRefs?: RefObject<HTMLElement | null>[];
  checkTargetWidth?: boolean;
  onClose?: () => void;
};

export type TPopover<T extends HTMLElement = HTMLElement> = TPopoverOptions & {
  className?: string;
  children: TPopoverChildren<T> | ReactNode;
  popover: ReactNode;
  targetStyle?: TPopoverTargetStyle;
  popoverStyle?: TStyledComponentsProps;
  animateContainerStyle?: TStyledComponentsProps;
  animate?: boolean;
  isPortal?: boolean;
  isPopoverVisible?: boolean;
};

export type TPopoverForwardRef = (<Element extends HTMLElement = HTMLElement>(
  props: TPopover<Element> & { ref?: Ref<TPopoverContext> }
) => ReactElement) & {
  displayName: string;
};
