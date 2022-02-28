import { forwardRef } from 'react';

import { IconComponent } from '../../Icon';
import type { TIcon } from '../../types';

export const Resize = forwardRef<SVGSVGElement, Omit<TIcon, 'children'>>((props, iconRef) => {
  return (
    <IconComponent ref={iconRef} {...props}>
      <path d="M3 17.1421L17.1421 2.99998" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 21.0711L21.0711 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconComponent>
  );
});

Resize.displayName = 'Icon.Resize';
