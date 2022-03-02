import { forwardRef } from 'react';

import { combineClassNames } from 'lib';

import type { TIcon } from './types';
import * as Icons from './units';
import { StyledSvg } from './styled';
import { ICON_CN } from './constants';

export const IconComponent = forwardRef<SVGSVGElement, TIcon>(
  ({ children, className, size, viewBox, ...rest }, iconRef) => {
    return (
      <StyledSvg
        ref={iconRef}
        viewBox={viewBox ?? '0 0 24 24'}
        className={combineClassNames(className, ICON_CN)}
        size={size ?? 24}
        {...rest}
      >
        {children}
      </StyledSvg>
    );
  }
);

type TIconComponent = typeof IconComponent;

interface IIcon extends TIconComponent {
  ChevronUp: typeof Icons.ChevronUp;
  ChevronRight: typeof Icons.ChevronRight;
  ChevronDown: typeof Icons.ChevronDown;
  ChevronLeft: typeof Icons.ChevronLeft;
  AlertCircle: typeof Icons.AlertCircle;
  Cross: typeof Icons.Cross;
  CrossSm: typeof Icons.CrossSm;
  Info: typeof Icons.Info;
  Mail: typeof Icons.Mail;
  Resize: typeof Icons.Resize;
  Search: typeof Icons.Search;
  Check: typeof Icons.Check;
  Minus: typeof Icons.Minus;
  ArrowLeft: typeof Icons.ArrowLeft;
  Copy: typeof Icons.Copy;
  Clipboard: typeof Icons.Clipboard;
  Download: typeof Icons.Download;
  UploadCloud: typeof Icons.UploadCloud;
  Grid: typeof Icons.Grid;
}

export const Icon = IconComponent as IIcon;
Icon.displayName = 'Icon';

for (const NamedIcon in Icons) Icon[NamedIcon] = (Icons as unknown)[NamedIcon];
