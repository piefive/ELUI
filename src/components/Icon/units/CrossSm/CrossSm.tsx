import { forwardRef } from 'react';

import { IconComponent } from '../../Icon';
import type { TIcon } from '../../types';

export const CrossSm = forwardRef<SVGSVGElement, Omit<TIcon, 'children'>>((props, iconRef) => {
  return (
    <IconComponent ref={iconRef} {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8L16 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 8L8 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </IconComponent>
  );
});

CrossSm.displayName = 'Icon.CrossSm';
