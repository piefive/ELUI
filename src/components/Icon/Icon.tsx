import { forwardRef } from 'react';

import { combineClassNames } from 'lib';

import type { TIcon } from './types';
import * as Icons from './units';
import { StyledSvg } from './styled';
import { ICON_CN } from './constants';

export const IconComponent = forwardRef<SVGSVGElement, TIcon>(({ children, className, size, ...rest }, iconRef) => {
  return (
    <StyledSvg
      ref={iconRef}
      viewBox="0 0 24 24"
      className={combineClassNames(className, ICON_CN)}
      size={size ?? 24}
      {...rest}
    >
      {children}
    </StyledSvg>
  );
});

type TIconComponent = typeof IconComponent;

interface IIcon extends TIconComponent {
  ChevronUp: typeof Icons.ChevronUp;
  ChevronRight: typeof Icons.ChevronRight;
  ChevronDown: typeof Icons.ChevronDown;
  ChevronLeft: typeof Icons.ChevronLeft;
}

export const Icon = IconComponent as IIcon;
Icon.displayName = 'Icon';

Icon.ChevronUp = Icons.ChevronUp;
Icon.ChevronRight = Icons.ChevronRight;
Icon.ChevronDown = Icons.ChevronDown;
Icon.ChevronLeft = Icons.ChevronLeft;
