import type { ChangeEventHandler, ReactNode, RefObject } from 'react';
import type { U } from 'ts-toolbelt';

import type { TStyledComponentsProps } from 'lib';

import type { TScrollContainerRef } from '../ScrollContainer';

export type TSegmentedControlHandler = ChangeEventHandler<HTMLInputElement>;

export type TSegmentStyle = TStyledComponentsProps<{ isActive: boolean }>;

export type TSegmentedControlContext = {
  name?: string;
  activeSegment: string;
  onSegmentChange: TSegmentedControlHandler;
  segmentStyle?: TSegmentStyle;
  _scrollContainerRef: RefObject<U.Nullable<TScrollContainerRef>>;
};

export interface ISegmentedControlComponent extends Omit<TSegmentedControlContext, '_scrollBoxRef'> {
  label?: string;
  isScrollable?: boolean;
  children: ReactNode;
  boxStyle?: TStyledComponentsProps;
  listStyle?: TStyledComponentsProps;
}
