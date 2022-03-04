import { Ref, forwardRef, useMemo, useRef } from 'react';

import { ScrollContainer, TScrollContainerRef } from '../ScrollContainer';

import type { ISegmentedControl, ISegmentedControlComponent, TSegmentValue, TSegmentedControlContext } from './types';
import { SegmentedControlProvider } from './hooks';
import { Segment } from './units';
import { StyledSegmentedControlBox } from './styled';

const SegmentedControlComponent = <SegmentedValue extends TSegmentValue = TSegmentValue>(
  { activeSegment, onSegmentChange, children, boxStyle }: ISegmentedControlComponent<SegmentedValue>,
  segmentedControlRef: Ref<HTMLDivElement>
) => {
  const _scrollContainerRef = useRef<TScrollContainerRef>();

  const ctx = useMemo<TSegmentedControlContext>(
    () => ({ activeSegment, onSegmentChange, _scrollContainerRef }),
    [activeSegment, onSegmentChange]
  );

  return (
    <ScrollContainer ref={_scrollContainerRef}>
      <StyledSegmentedControlBox ref={segmentedControlRef} {...{ boxStyle }}>
        <SegmentedControlProvider value={ctx}>{children}</SegmentedControlProvider>
      </StyledSegmentedControlBox>
    </ScrollContainer>
  );
};

export const SegmentedControl = forwardRef<HTMLDivElement, ISegmentedControlComponent>(
  SegmentedControlComponent
) as unknown as ISegmentedControl;

SegmentedControl.Segment = Segment;
