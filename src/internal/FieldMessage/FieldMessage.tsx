import { animated } from 'react-spring';

import { combineClassNames, useAnimateHeight, useDebounce, useLastValidState } from 'lib';

import { FIELD_MESSAGE_CN } from './constants';
import { StyledTypography } from './styled';
import type { TFieldMessage } from './types';

export const FieldMessage = ({ className, children, messageStyle }: TFieldMessage) => {
  const content = useLastValidState(children);
  const delayedChild = useDebounce(children, 50);
  const { ref: boxRef, style: animateStyle } = useAnimateHeight(!!delayedChild);

  return (
    <animated.div style={animateStyle}>
      <div ref={boxRef}>
        <StyledTypography
          variant="caption"
          className={combineClassNames(className, FIELD_MESSAGE_CN)}
          typographyStyle={messageStyle}
        >
          {content}
        </StyledTypography>
      </div>
    </animated.div>
  );
};
