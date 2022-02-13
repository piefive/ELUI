import type { FC } from 'react';

import type { TConfigProvider } from './types';

export const ConfigProvider: FC<TConfigProvider> = ({ children }) => {
  return <div>{children}</div>;
};
