// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TAny = any;

type TCallback = () => TAny;

type TCallbackWithArgs = (...args: unknown[]) => TAny;

export const nextTick = <Fn extends TCallback>(callback: Fn) => setTimeout(callback);

export const nextTickFn =
  <Fn extends TCallbackWithArgs>(fn: Fn) =>
  (...args: Parameters<Fn>) =>
    nextTick(() => fn(...args));
