import { isNil } from 'ramda';
import type { LegacyRef, MutableRefObject, RefCallback } from 'react';
import type { U } from 'ts-toolbelt';

import { isFn } from './is';

export const mergeRefs =
  <AnyRef = unknown>(
    ...refs: Array<MutableRefObject<U.Nullable<AnyRef>> | LegacyRef<U.Nullable<AnyRef>>>
  ): RefCallback<U.Nullable<AnyRef>> =>
  value => {
    for (const ref of refs) {
      if (isFn(ref)) ref(value);
      else if (!isNil(ref)) (<MutableRefObject<U.Nullable<AnyRef>>>ref).current = value;
    }
  };
