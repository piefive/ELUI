import { Ref, forwardRef } from 'react';

import { combineClassNames } from 'lib';

import type { IBox } from './types';
import { BOX_CN } from './constants';
import { StyledBox } from './styled';

export const Box = forwardRef<HTMLElement, IBox>((props, innerRef) => {
  const { className, children, tag, ...rest } = props;

  return (
    <StyledBox
      as={tag}
      ref={innerRef as Ref<HTMLDivElement>}
      className={combineClassNames(className, BOX_CN)}
      {...rest}
    >
      {children}
    </StyledBox>
  );
});

Box.displayName = 'Box';
