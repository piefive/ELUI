import { forwardRef } from 'react';

import { IconComponent } from '../../Icon';
import type { TIcon } from '../../types';

export const Trash = forwardRef<SVGSVGElement, Omit<TIcon, 'children'>>((props, iconRef) => {
  return (
    <IconComponent ref={iconRef} {...props}>
      <polyline points="3 6 5 6 21 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconComponent>
  );
});

Trash.displayName = 'Icon.Trash';
