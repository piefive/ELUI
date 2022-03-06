import type { MouseEvent, ReactElement, ReactNode, Ref, RefObject } from 'react';
import type { U } from 'ts-toolbelt';

import type { TStyledComponentsProps } from 'lib';

import type { TScrollContainerRef } from '../ScrollContainer';

import type { Tab } from './units';

export type TTabValue = unknown;

export type TTabHandler<TabValue = TTabValue> = (value: TabValue, event: MouseEvent<HTMLButtonElement>) => void;

export type TTabStyle = TStyledComponentsProps<{ isActive: boolean }>;

export type TActiveTabPosition = {
  left: number;
  width: number;
};

export type TTabsContext<TabValue = TTabValue> = {
  activeTab?: TabValue;
  onTabChange?: TTabHandler<TabValue>;
  tabStyle?: TTabStyle;
  onActivePositionChange: (position: TActiveTabPosition) => void;
  _scrollContainerRef: RefObject<U.Nullable<TScrollContainerRef>>;
};

export interface ITabsComponent<TabValue = TTabValue> extends Omit<TTabsContext<TabValue>, '_scrollBoxRef'> {
  className?: string;
  boxStyle?: TStyledComponentsProps;
  activeLineStyle?: TStyledComponentsProps;
  children: ReactNode;
  isScrollable?: boolean;
}

export type ITabs = (<TabValue = TTabValue>(
  props: ITabsComponent<TabValue> & { ref?: Ref<HTMLDivElement> }
) => ReactElement) & {
  displayName: string;
  Tab: typeof Tab;
};

export type TTab<TabValue = TTabValue> = {
  className?: string;
  value: TabValue;
  leftSlot?: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  boxStyle?: TTabStyle;
};
