import { forwardRef } from 'react';

import { IconComponent } from '../../Icon';
import type { TIcon } from '../../types';

export const Eye = forwardRef<SVGSVGElement, Omit<TIcon, 'children'>>((props, iconRef) => {
  return (
    <IconComponent ref={iconRef} {...props}>
      <path
        d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconComponent>
  );
});

Eye.displayName = 'Icon.Eye';
