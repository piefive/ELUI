import { forwardRef } from 'react';

import { IconComponent } from '../../Icon';
import type { TIcon } from '../../types';

export const Grid = forwardRef<SVGSVGElement, Omit<TIcon, 'children'>>((props, iconRef) => {
  return (
    <IconComponent ref={iconRef} {...props}>
      <path d="M10 3H3V10H10V3Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 3H14V10H21V3Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 14H14V21H21V14Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14H3V21H10V14Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconComponent>
  );
});

Grid.displayName = 'Icon.Grid';
