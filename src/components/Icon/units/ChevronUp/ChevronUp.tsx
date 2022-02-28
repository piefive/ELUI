import { forwardRef } from 'react';

import { IconComponent } from '../../Icon';
import type { TIcon } from '../../types';

export const ChevronUp = forwardRef<SVGSVGElement, Omit<TIcon, 'children'>>((props, iconRef) => {
  return (
    <IconComponent ref={iconRef} {...props}>
      <path d="M18 15L12 9L6 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconComponent>
  );
});

ChevronUp.displayName = 'Icon.ChevronUp';
