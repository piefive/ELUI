import type { CSSObject, DefaultTheme, css } from 'styled-components';

type TThemeFunc<T extends Record<string, unknown> = Record<string, unknown>> =
  ({
    theme,
  }: { theme: DefaultTheme } & T) => CSSObject | ReturnType<typeof css>;

export type TStyledComponentsProps<
  T extends Record<string, unknown> = Record<string, unknown>
> = TThemeFunc<T> | CSSObject | ReturnType<typeof css>;

export const getComponentStyle = <
  T extends Record<string, unknown> = Record<string, unknown>
>(
  style: TStyledComponentsProps<T> | undefined,
  props: { theme: DefaultTheme } & T
): Omit<TStyledComponentsProps, 'TThemeFunc'> => {
  if (!style) return {};
  return typeof style === 'function' ? style(props) : style;
};
