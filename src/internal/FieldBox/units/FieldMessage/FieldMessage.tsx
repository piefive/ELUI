import { animated } from 'react-spring';
import { css } from 'styled-components';

import { Typography } from 'components/Typography';
import { combineClassNames, getComponentStyle, useAnimateHeight, useDebounce, useLastValidState } from 'lib';

import { FIELD_MESSAGE_CN } from './constants';
import type { TFieldMessage } from './types';

export const FieldMessage = ({ className, children, messageStyle }: TFieldMessage) => {
  const content = useLastValidState(children);
  const delayedChild = useDebounce(children, 50);
  const { ref: boxRef, style: animateStyle } = useAnimateHeight(!!delayedChild);

  return (
    <animated.div style={animateStyle}>
      <div ref={boxRef}>
        <Typography
          variant="caption"
          className={combineClassNames(className, FIELD_MESSAGE_CN)}
          typographyStyle={({ theme }) => css`
            color: ${({ theme }) => theme.palette.grey_700};
            ${getComponentStyle(messageStyle, { theme })}
          `}
        >
          {content}
        </Typography>
      </div>
    </animated.div>
  );
};
