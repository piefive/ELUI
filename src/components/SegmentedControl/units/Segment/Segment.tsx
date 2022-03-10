import { useRef } from 'react';

import { bindAria, isPrimitiveReactNode, useMeasure, useUpdateEffect } from 'lib';

import { useSegmentedControlContext } from '../../hooks';

import type { TSegment } from './types';
import { StyledLeftSlot, StyledSegmentBox, StyledSegmentRadio, StyledTypography } from './styled';

const SEGMENT_OFFSET_LEFT = 14;

export const Segment = ({ name, value, disabled = false, leftSlot, children, boxStyle }: TSegment) => {
  const radioRef = useRef<HTMLInputElement>(null);
  const [segmentRef, { left, width }] = useMeasure<HTMLLIElement>();
  const { activeSegment, onSegmentChange, segmentStyle, _scrollContainerRef } = useSegmentedControlContext();

  const isActiveSegment = activeSegment === value;

  useUpdateEffect(() => {
    const scrollContainer = _scrollContainerRef.current;

    if (isActiveSegment && scrollContainer) {
      const left = segmentRef.current.offsetLeft - SEGMENT_OFFSET_LEFT;
      scrollContainer?.scrollTo(left > 0 ? left : 0, width + SEGMENT_OFFSET_LEFT).catch();
    }
  }, [isActiveSegment, left, width]);

  return (
    <StyledSegmentBox
      ref={segmentRef}
      role="tab"
      isActive={isActiveSegment}
      onClick={!disabled ? () => radioRef.current?.click() : undefined}
      {...bindAria({ selected: isActiveSegment })}
      {...{ boxStyle, segmentStyle, disabled }}
    >
      <StyledSegmentRadio
        ref={radioRef}
        tabIndex={-1}
        type="radio"
        onChange={onSegmentChange}
        {...bindAria({ checked: isActiveSegment, hidden: true })}
        {...{ value, name, disabled }}
      />
      {leftSlot && <StyledLeftSlot>{leftSlot}</StyledLeftSlot>}
      {isPrimitiveReactNode(children) ? <StyledTypography variant="st1">{children}</StyledTypography> : children}
    </StyledSegmentBox>
  );
};
