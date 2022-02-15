import { forwardRef } from 'react';

import { combineClassNames } from 'lib';

import type { TTypography } from './types';
import { StyledTypography } from './styled';
import { TYPOGRAPHY_CN } from './constants';

export const Typography = forwardRef<HTMLElement, TTypography>(
  ({ className, children, tag = 'span', variant = 'b1', ...rest }, ref) => (
    <StyledTypography
      className={combineClassNames(className, TYPOGRAPHY_CN)}
      as={tag}
      {...{ ...rest, ref, variant }}
    >
      {children}
    </StyledTypography>
  )
);
