import type { ReactElement, ReactNode, Ref } from 'react';

import type { TStyledComponentsProps } from 'lib/styled';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TChipValue = any;

export type TChipVariant = 'default' | 'input';

export type TChipScheme = 'default' | 'success' | 'error';

export type TChipHandlerArgs<Value = TChipValue> = {
  value?: Value;
  checked: boolean;
};

export type TChipHandler<Value = TChipValue> = ({ value, checked }: TChipHandlerArgs<Value>) => void;

export type TChipStyle = TStyledComponentsProps<{ checked: boolean }>;

type TChipProps<Value extends TChipValue = TChipValue> = {
  className?: string;
  leftSlot?: ReactNode;
  children?: ReactNode;
  value?: Value;
  onChip?: TChipHandler<Value>;
  boxStyle?: TStyledComponentsProps;
  semantics?: string;
};

export interface IChipDefault<Value extends TChipValue = TChipValue> extends TChipProps<Value> {
  variant?: 'default';
  scheme?: TChipScheme;
}

export interface IChipInput<Value extends TChipValue = TChipValue> extends TChipProps<Value> {
  variant?: 'input';
  withCheckedIcon?: boolean;
  onDelete?: TChipHandler<Value>;
  disabled?: boolean;
  checked?: boolean;
}

export type TChip<Value extends TChipValue = TChipValue> = IChipDefault<Value> | IChipInput<Value>;

export type TChipForwardRef = (<Value extends TChipValue = TChipValue>(
  props: TChip<Value> & { ref?: Ref<HTMLDivElement> }
) => ReactElement) & {
  displayName: string;
};
