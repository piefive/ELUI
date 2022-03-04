import { equals } from 'ramda';

import { isPrimitiveReactNode, useMeasure, useUpdateEffect } from 'lib';

import { useSegmentedControlContext } from '../../hooks';
import type { TSegment, TSegmentValue } from '../../types';

import { StyledLeftSlot, StyledSegmentBox, StyledTypography } from './styled';

const SEGMENT_OFFSET_LEFT = 14;

export const Segment = <SegmentedValue extends TSegmentValue = TSegmentValue>({
  value,
  disabled = false,
  leftSlot,
  children,
  boxStyle,
}: TSegment<SegmentedValue>) => {
  const [segmentRef, { left, width }] = useMeasure<HTMLButtonElement>();
  const { activeSegment, onSegmentChange, segmentStyle, _scrollContainerRef } =
    useSegmentedControlContext<SegmentedValue>();

  const isActiveSegment = equals(activeSegment, value);

  const handleSegmentChange = () => !disabled && onSegmentChange(value);

  useUpdateEffect(() => {
    const scrollContainer = _scrollContainerRef.current;

    if (isActiveSegment && scrollContainer) {
      const left = segmentRef.current.offsetLeft - SEGMENT_OFFSET_LEFT;
      scrollContainer.scrollTo(left > 0 ? left : 0, width + SEGMENT_OFFSET_LEFT);
    }
  }, [isActiveSegment, left, width]);

  return (
    <StyledSegmentBox
      ref={segmentRef}
      type="button"
      isActive={isActiveSegment}
      onClick={handleSegmentChange}
      {...{ boxStyle, segmentStyle, disabled }}
    >
      {leftSlot && <StyledLeftSlot>{leftSlot}</StyledLeftSlot>}
      {isPrimitiveReactNode(children) ? <StyledTypography variant="st1">{children}</StyledTypography> : children}
    </StyledSegmentBox>
  );
};
