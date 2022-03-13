type TTarget = {
  addEventListener: (...args: unknown[]) => unknown;
  removeEventListener: (...args: unknown[]) => unknown;
};

type TEventArgs<Target extends TTarget = Element | Document, Event = keyof DocumentEventMap> = [
  target: Target,
  event: Omit<Event, number>,
  listener: EventListener
];

export const on = <Target extends TTarget = Element | Document, Event extends string = keyof DocumentEventMap>(
  ...args: TEventArgs<Target, Event>
) => {
  const [target, event, listener] = args;

  target.addEventListener(<Event>event, listener);
};

export const off = <Target extends TTarget = Element | Document, Event extends string = keyof DocumentEventMap>(
  ...args: TEventArgs<Target, Event>
) => {
  const [target, event, listener] = args;

  target.removeEventListener(<Event>event, listener);
};

export const createListener = <
  Target extends TTarget = Element | Document,
  Event extends string = keyof DocumentEventMap
>(
  ...args: TEventArgs<Target, Event>
) => ({
  on: () => on<Target, Event>(...args),
  off: () => off<Target, Event>(...args),
});
