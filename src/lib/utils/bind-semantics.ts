import type { U } from 'ts-toolbelt';

import { TEluiName, createEluiName } from './create-elui-name';

type TSemanticsName = TEluiName<'semantics'>;

type TSemantics<T extends string> = Record<`data-${TSemanticsName}`, T>;

const SEMANTICS_KEY: TSemanticsName = createEluiName('semantics');

export const bindSemantics = <T extends string>(name?: U.Nullable<T>): U.Nullable<TSemantics<T>> => {
  if (!name) return null;

  return {
    [`data-${SEMANTICS_KEY}`]: name,
  } as TSemantics<T>;
};
