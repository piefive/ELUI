import { forwardRef } from 'react';

import { IconComponent } from '../../Icon';
import type { TIcon } from '../../types';

export const UploadCloud = forwardRef<SVGSVGElement, Omit<TIcon, 'children'>>((props, iconRef) => {
  return (
    <IconComponent ref={iconRef} {...props}>
      <path d="M16 16L12 12L8 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12V21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20.39 18.39C21.3654 17.8583 22.1359 17.0169 22.5799 15.9986C23.0239 14.9804 23.1162 13.8432 22.8422 12.7667C22.5682 11.6902 21.9435 10.7355 21.0667 10.0535C20.1899 9.3714 19.1109 9.00075 18 9.00001H16.74C16.4373 7.82926 15.8732 6.74235 15.09 5.82101C14.3068 4.89967 13.3249 4.16786 12.2181 3.68062C11.1114 3.19338 9.90857 2.96337 8.70014 3.0079C7.4917 3.05242 6.30909 3.37031 5.2412 3.93768C4.17331 4.50505 3.24793 5.30712 2.53464 6.2836C1.82135 7.26008 1.33871 8.38555 1.123 9.57541C0.907291 10.7653 0.964126 11.9885 1.28923 13.1533C1.61434 14.318 2.19926 15.3939 3.00002 16.3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 16L12 12L8 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconComponent>
  );
});

UploadCloud.displayName = 'Icon.UploadCloud';
