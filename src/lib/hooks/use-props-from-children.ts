import { Children, Component, FC, ReactElement, ReactNode, useMemo } from 'react';

import { cast, isObject } from 'lib/utils';

export const usePropsFromChildren = <Props extends Record<string, unknown>>(
  children: ReactNode,
  component: FC<Props>
) =>
  useMemo(
    () =>
      Children.toArray(children).reduce<Props[]>((acc, reactNode) => {
        const isReactElement = isObject<ReactElement>(reactNode) && reactNode?.type === component;

        if (isReactElement) acc.push(cast<Component<Props>>(reactNode).props);

        return acc;
      }, []),
    [children, component]
  );
