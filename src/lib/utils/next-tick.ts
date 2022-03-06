// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TAny = any;

type TCallback = () => TAny;

type TCallbackWithArgs = (...args: unknown[]) => TAny;

export const nextTick = <Fn extends TCallback>(callback: Fn) => {
  nextAsyncTick(callback).then();
};

export const nextTickFn =
  <Fn extends TCallbackWithArgs>(fn: Fn) =>
  (...args: Parameters<Fn>) =>
    nextTick(() => fn(...args));

export const nextAsyncTick = <Fn extends TCallback>(callback: Fn): Promise<ReturnType<Fn>> =>
  new Promise(resolve => setTimeout(() => resolve(callback())));

export const nextAsyncTickFn =
  <Fn extends TCallbackWithArgs>(fn: Fn) =>
  (...args: Parameters<Fn>): Promise<ReturnType<Fn>> =>
    nextAsyncTick(() => fn(...args));
