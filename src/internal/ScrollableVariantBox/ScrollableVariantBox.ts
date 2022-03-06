import { Fragment, createElement, forwardRef } from 'react';

import { ScrollContainer, TScrollContainerRef } from 'components';

import type { IScrollableVariantBox } from './types';

export const ScrollableVariantBox = forwardRef<TScrollContainerRef, IScrollableVariantBox>(
  ({ isScrollable, children, ...rest }, ref) =>
    createElement(isScrollable ? ScrollContainer : Fragment, isScrollable ? { ref, ...rest } : null, children)
);
