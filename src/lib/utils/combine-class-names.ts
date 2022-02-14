import { isObject } from './is';

type TClassName = string | null | undefined;

export const combineClassNames = (
  ...args: Array<TClassName | Record<string, boolean>>
): string =>
  args
    .reduce<string[]>((acc, curr) => {
      if (isObject(curr)) {
        for (const key in curr) if (curr[key]) acc.push(key);
      } else {
        if (curr) acc.push(<string>curr);
      }

      return acc;
    }, [])
    .join(' ');
