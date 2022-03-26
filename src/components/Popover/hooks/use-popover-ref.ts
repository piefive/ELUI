import { useRef } from 'react';

import type { TPopoverContext } from '../types';

export const usePopoverRef = () => useRef<TPopoverContext>(null);
