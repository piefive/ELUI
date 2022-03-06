import type { U } from 'ts-toolbelt';

export const bindCustomAttr = (cssAttr?: U.Nullable<string>) => {
  if (cssAttr) {
    const [attr, value] = cssAttr.split('=');

    return { [attr]: value };
  }

  return null;
};

export const createEluiCustomAttr = (name: string) => `data-elui-${name}`;

export const getCustomAttr = (attr: string, value?: unknown) => `${attr}${!!value ? `="${String(value)}"` : ''}`;
