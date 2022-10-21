import { forwardRef } from 'react';
import { animated } from 'react-spring';

import { bindSemantics, combineClassNames } from 'lib';

import { useScrollContainer } from './hooks';
import type { TScrollContainer, TScrollContainerRef } from './types';
import { SCROLL_CONTAINER_CN } from './constants';
import { StyledBox, StyledContent } from './styled';

export const ScrollContainer = forwardRef<TScrollContainerRef, TScrollContainer>(
  (
    { semantics, dragOnly, scrollAfterReachedBoundaries, children, boxStyle, className, onScroll },
    scrollContainerRef
  ) => {
    const { containerRef, contentRef, style } = useScrollContainer({
      onScroll,
      dragOnly,
      scrollAfterReachedBoundaries,
      scrollContainerRef,
    });

    return (
      <StyledBox
        ref={containerRef}
        className={combineClassNames(className, SCROLL_CONTAINER_CN)}
        {...bindSemantics(semantics)}
        {...{ boxStyle }}
      >
        <animated.div ref={contentRef} {...{ style }}>
          <StyledContent>{children}</StyledContent>
        </animated.div>
      </StyledBox>
    );
  }
);

ScrollContainer.displayName = 'ScrollContainer';
