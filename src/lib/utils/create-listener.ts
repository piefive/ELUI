type TEventArgs<
  Target = Element | Document | MediaQueryList,
  Event = Target extends MediaQueryList ? keyof MediaQueryListEventMap : keyof DocumentEventMap
> = [target: Target, event: Omit<Event, number>, listener: EventListener];

export const on = (...args: TEventArgs) => {
  const [target, event, listener] = args;

  target.addEventListener(<string>event, listener);
};

export const off = (...args: TEventArgs) => {
  const [target, event, listener] = args;

  target.removeEventListener(<string>event, listener);
};

export const createListener = (...args: TEventArgs) => ({
  on: () => on(...args),
  off: () => off(...args),
});
