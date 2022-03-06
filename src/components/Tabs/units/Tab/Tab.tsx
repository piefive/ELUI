import { useEffect } from 'react';
import { equals } from 'ramda';

import { combineClassNames, isPrimitiveReactNode, useMeasure } from 'lib';

import type { TTabValue } from '../../types';
import { Typography } from '../../../Typography';
import { TAB_CN } from '../../constants';
import { useTabsContext } from '../../hooks';

import type { TTab } from './types';
import { StyledLeftSlot, StyledTab } from './styled';

const TAB_OFFSET_LEFT = 14;

export const Tab = <TabValue extends TTabValue = TTabValue>({
  className,
  value,
  leftSlot,
  disabled,
  children,
  boxStyle,
}: TTab<TabValue>) => {
  const [tabRef, { width, left }] = useMeasure<HTMLButtonElement>();
  const { activeTab, tabStyle, onTabChange, onActivePositionChange, _scrollContainerRef } = useTabsContext<TabValue>();

  const isActiveTab = equals(activeTab, value);

  useEffect(() => {
    const scrollContainer = _scrollContainerRef.current;

    if (isActiveTab) {
      const offset = tabRef.current.offsetLeft;
      onActivePositionChange({ width, left: offset });

      if (scrollContainer) {
        const scrollOffset = offset - TAB_OFFSET_LEFT;
        scrollContainer.scrollTo(scrollOffset > 0 ? scrollOffset : 0, width + TAB_OFFSET_LEFT).catch();
      }
    }
  }, [_scrollContainerRef, isActiveTab, left, onActivePositionChange, tabRef, width]);

  return (
    <StyledTab
      ref={tabRef}
      role="tab"
      className={combineClassNames(className, TAB_CN)}
      isActive={isActiveTab}
      tabIndex={disabled ? -1 : 0}
      aria-selected={isActiveTab}
      onClick={onTabChange && !isActiveTab ? event => onTabChange(value, event) : undefined}
      {...{ disabled, boxStyle, tabStyle }}
    >
      {leftSlot && <StyledLeftSlot>{leftSlot}</StyledLeftSlot>}
      {isPrimitiveReactNode(children) ? (
        <Typography typographyStyle={{ color: 'inherit' }}>{children}</Typography>
      ) : (
        children
      )}
    </StyledTab>
  );
};
