import { forwardRef } from 'react';

import { IconComponent } from '../../Icon';
import type { TIcon } from '../../types';

export const FolderMinus = forwardRef<SVGSVGElement, Omit<TIcon, 'children'>>((props, iconRef) => {
  return (
    <IconComponent ref={iconRef} {...props}>
      <path
        d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="9" y1="14" x2="15" y2="14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconComponent>
  );
});

FolderMinus.displayName = 'Icon.FolderMinus';
