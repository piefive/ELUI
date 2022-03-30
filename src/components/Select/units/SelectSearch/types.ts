import type { TSearchHandler } from '../../types';

export type TSelectSearch = {
  handleSearch: TSearchHandler;
  fallback?: string;
};
