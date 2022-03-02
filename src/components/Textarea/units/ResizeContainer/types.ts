import type { MutableRefObject, ReactNode } from 'react';
import type { U } from 'ts-toolbelt';

export type TResizeContainer = {
  fieldRef?: MutableRefObject<U.Nullable<HTMLTextAreaElement>>;
  children: (height: number) => ReactNode;
  isDisabled?: boolean;
};
