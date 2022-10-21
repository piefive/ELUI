export type TEluiName<T extends string> = `elui-${T}`;

export const createEluiName = <T extends string>(name: T) => `elui-${name}` as TEluiName<T>;
