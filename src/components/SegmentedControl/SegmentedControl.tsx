import { forwardRef, useMemo, useRef } from 'react';
import type { U } from 'ts-toolbelt';

import { FieldLabel, ScrollableVariantBox } from 'internal';

import type { TScrollContainerRef } from '../ScrollContainer';

import type { ISegmentedControlComponent, TSegmentedControlContext } from './types';
import { SegmentedControlProvider } from './hooks';
import { Segment } from './units';
import { StyledSegmentedControlBox, StyledSegmentedControlList } from './styled';

const SegmentedControlComponent = forwardRef<HTMLUListElement, ISegmentedControlComponent>(
  (
    { label, activeSegment, onSegmentChange, children, isScrollable = true, boxStyle, listStyle },
    segmentedControlRef
  ) => {
    const _scrollContainerRef = useRef<U.Nullable<TScrollContainerRef>>();

    const ctx = useMemo<TSegmentedControlContext>(
      () => ({ activeSegment, onSegmentChange, _scrollContainerRef }),
      [activeSegment, onSegmentChange]
    );

    return (
      <StyledSegmentedControlBox {...{ boxStyle, isScrollable }}>
        {label && <FieldLabel {...{ label }} />}
        <ScrollableVariantBox ref={_scrollContainerRef} {...{ isScrollable }}>
          <StyledSegmentedControlList ref={segmentedControlRef} role="tablist" {...{ listStyle }}>
            <SegmentedControlProvider value={ctx}>{children}</SegmentedControlProvider>
          </StyledSegmentedControlList>
        </ScrollableVariantBox>
      </StyledSegmentedControlBox>
    );
  }
);

type TSegmentedControlComponent = typeof SegmentedControlComponent;

export interface ISegmentControl extends TSegmentedControlComponent {
  Segment: typeof Segment;
}

export const SegmentedControl = SegmentedControlComponent as ISegmentControl;

SegmentedControl.displayName = 'SegmentedControl';
SegmentedControl.Segment = Segment;
