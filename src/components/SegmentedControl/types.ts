import type { CSSProperties, ReactElement, ReactNode, Ref, RefObject } from 'react';

import type { TStyledComponentsProps } from 'lib';

import type { TScrollContainerRef } from '../ScrollContainer';

import type { Segment } from './units';

export type TSegmentValue = unknown;

export type TSegmentedControlHandler<SegmentedValue = TSegmentValue> = (value: SegmentedValue) => void;

export type TSegmentStyle = TStyledComponentsProps<{ isActive: boolean }>;

export type TSegmentedControlContext<SegmentedValue = TSegmentValue> = {
  activeSegment: SegmentedValue;
  onSegmentChange: TSegmentedControlHandler<SegmentedValue>;
  segmentStyle?: TSegmentStyle;
  _scrollContainerRef: RefObject<TScrollContainerRef>;
};

export interface ISegmentedControlComponent<SegmentedValue = TSegmentValue>
  extends Omit<TSegmentedControlContext<SegmentedValue>, '_scrollBoxRef'> {
  boxStyle?: TStyledComponentsProps;
  children: ReactNode;
}

export type TSegment<SegmentedValue = TSegmentValue> = {
  value: SegmentedValue;
  leftSlot?: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  boxStyle?: TSegmentStyle;
};

export type ISegmentedControl = (<SegmentedValue = TSegmentValue>(
  p: ISegmentedControlComponent<SegmentedValue> & { ref?: Ref<HTMLDivElement> }
) => ReactElement) & {
  Segment: typeof Segment;
};
