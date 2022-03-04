import { useGesture } from '@use-gesture/react';
import { ForwardedRef, useImperativeHandle, useRef } from 'react';
import { useSpring } from 'react-spring';

import { isBetween, useFirstMountState, useMeasure, useUpdateEffect } from 'lib';

import type { TScrollContainer, TScrollContainerRef } from '../types';
import { checkOutOfBounds } from '../utils';

interface IScrollContainer extends Pick<TScrollContainer, 'onScroll' | 'scrollAfterReachedBoundaries' | 'dragOnly'> {
  scrollContainerRef: ForwardedRef<TScrollContainerRef>;
}

export const useScrollContainer = ({
  onScroll,
  scrollAfterReachedBoundaries,
  scrollContainerRef,
  dragOnly,
}: IScrollContainer) => {
  const isFirstMount = useFirstMountState();
  const [containerRef, { width: containerWidth }] = useMeasure();
  const [contentRef, { scrollWidth: contentWidth }] = useMeasure();
  const x = useRef(0);
  const [style, state] = useSpring({ x: 0 }, []);
  const contentWidthDiff = contentWidth - containerWidth;

  useImperativeHandle(scrollContainerRef, () => ({
    scrollTo(left, contentWidth = 0) {
      setTimeout(() => {
        const { width } = containerRef.current.getBoundingClientRect();
        const scrollWidth = contentRef.current.scrollWidth;
        const current = Math.abs(x.current);
        const next = checkOutOfBounds(-left, scrollWidth - width);
        const isInView = left > current && isBetween(left + contentWidth, current, current + width);

        if (!isInView) {
          x.current = next;
          state[isFirstMount ? 'set' : 'start']({ x: x.current });
        }
      });
    },
  }));

  useGesture(
    {
      onDrag: ({ delta: [deltaX], down, event }) => {
        if (contentWidthDiff > 0 && down) {
          event.preventDefault();
          x.current = checkOutOfBounds(x.current + deltaX, contentWidthDiff);
          state.start({ x: x.current });
          if (onScroll) onScroll(x.current);
        }
      },
      onWheel: ({ event, delta: [, deltaY] }) => {
        if (!dragOnly && contentWidthDiff > 0) {
          const updatedX = x.current + deltaY;
          x.current = checkOutOfBounds(updatedX, contentWidthDiff);
          if (
            !scrollAfterReachedBoundaries ||
            (!(x.current === 0 && deltaY > 0) && !(x.current === -contentWidthDiff && deltaY < 0))
          ) {
            event.preventDefault();
          }
          state.start({ x: x.current });
          if (onScroll) onScroll(x.current);
        }
      },
    },
    {
      target: containerRef,
      eventOptions: { passive: false },
      drag: { axis: 'x', filterTaps: true },
    }
  );

  useUpdateEffect(() => {
    x.current = contentWidthDiff ? checkOutOfBounds(x.current, contentWidthDiff) : 0;
    state.set({ x: x.current });
  }, [contentWidth, containerWidth, state.set]);

  return {
    containerRef,
    contentRef,
    style,
  };
};
