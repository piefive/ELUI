import { forwardRef } from 'react';

import { IconComponent } from '../../Icon';
import type { TIcon } from '../../types';

export const Edit = forwardRef<SVGSVGElement, Omit<TIcon, 'children'>>((props, iconRef) => {
  return (
    <IconComponent ref={iconRef} {...props}>
      <path
        d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconComponent>
  );
});

Edit.displayName = 'Icon.Edit';
