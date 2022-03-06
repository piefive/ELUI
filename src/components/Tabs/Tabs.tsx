import { Ref, forwardRef, useMemo, useRef } from 'react';
import { isNil } from 'ramda';

import { ScrollableVariantBox } from 'internal';
import { combineClassNames, useUpdateEffect } from 'lib';

import type { TScrollContainerRef } from '../ScrollContainer';

import type { ITabs, ITabsComponent, TTabValue, TTabsContext } from './types';
import { TABS_CN } from './constants';
import { TabsProvider, useTabActiveLine } from './hooks';
import { Tab } from './units';
import { StyledActiveLine, StyledTabsBox } from './styled';

const TabsComponent = <TabValue extends TTabValue = TTabValue>(
  {
    className,
    isScrollable = true,
    activeTab,
    onTabChange,
    children,
    tabStyle,
    boxStyle,
    activeLineStyle,
  }: ITabsComponent<TabValue>,
  tabsRef: Ref<HTMLDivElement>
) => {
  const _scrollContainerRef = useRef<TScrollContainerRef>(null);
  const { activeLinePositionStyle, handleClearPosition, onActivePositionChange } = useTabActiveLine();

  const ctx = useMemo<TTabsContext<TabValue>>(
    () => ({ activeTab, onTabChange, tabStyle, onActivePositionChange, _scrollContainerRef }),
    [activeTab, onActivePositionChange, onTabChange, tabStyle]
  );

  useUpdateEffect(() => {
    if (isNil(activeTab)) handleClearPosition();
  }, [activeTab]);

  return (
    <ScrollableVariantBox ref={_scrollContainerRef} {...{ isScrollable }}>
      <StyledTabsBox ref={tabsRef} className={combineClassNames(className, TABS_CN)} {...{ boxStyle }}>
        <TabsProvider value={ctx}>{children}</TabsProvider>
        <StyledActiveLine style={activeLinePositionStyle} {...{ activeLineStyle }} />
      </StyledTabsBox>
    </ScrollableVariantBox>
  );
};

export const Tabs = forwardRef<HTMLDivElement, ITabsComponent>(TabsComponent) as unknown as ITabs;

Tabs.displayName = 'Tabs';
Tabs.Tab = Tab;
