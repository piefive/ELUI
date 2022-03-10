type TEventArgs = [target: Element | Document, event: Omit<keyof DocumentEventMap, number>, listener: EventListener];

export const on = (...args: TEventArgs) => {
  const [target, event, listener] = args;

  target.addEventListener(<keyof DocumentEventMap>event, listener);
};

export const off = (...args: TEventArgs) => {
  const [target, event, listener] = args;

  target.removeEventListener(<keyof DocumentEventMap>event, listener);
};

export const createListener = (...args: TEventArgs) => ({
  on: () => on(...args),
  off: () => off(...args),
});
