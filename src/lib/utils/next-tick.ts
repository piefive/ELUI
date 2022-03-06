type TUnknownCallback = (...args: unknown[]) => unknown;

export const nextTick = (callback: TUnknownCallback) => {
  setTimeout(callback);
};

export const nextTickFn =
  (fn: TUnknownCallback) =>
  (...args: unknown[]) =>
    nextTick(() => fn(...args));
