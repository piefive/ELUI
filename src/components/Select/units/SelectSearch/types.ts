import type { KeyboardEventHandler } from 'react';

import type { TSearchHandler } from '../../types';

export type TSelectSearch = {
  handleSearch: TSearchHandler;
  fallback?: string;
  getMaxWidth: () => number;
  onClear?: KeyboardEventHandler<HTMLInputElement>;
};
