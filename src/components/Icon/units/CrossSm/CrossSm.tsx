import { forwardRef } from 'react';

import { IconComponent } from '../../Icon';
import type { TIcon } from '../../types';

export const CrossSm = forwardRef<SVGSVGElement, Omit<TIcon, 'children'>>((props, iconRef) => {
  return (
    <IconComponent ref={iconRef} {...props}>
      <path d="M8 8L16 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 8L8 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconComponent>
  );
});

CrossSm.displayName = 'Icon.CrossSm';
