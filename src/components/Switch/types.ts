import type { MouseEvent, ReactNode } from 'react';

import type { TStyledComponentsProps } from 'lib';

export type TSwitchHandler = (checked: boolean, event: MouseEvent<HTMLButtonElement>) => void;

export type TStyledToggleProps = TStyledComponentsProps<{ checked: boolean }>;

export type TSwitch = {
  checked?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  checkedSlot?: ReactNode;
  uncheckedSlot?: ReactNode;
  className?: string;
  semantics?: string;
  onChange?: TSwitchHandler;
  boxStyle?: TStyledComponentsProps;
  toggleStyle?: TStyledToggleProps;
};
