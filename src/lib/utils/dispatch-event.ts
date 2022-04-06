import { isFn } from './is';

type TOptions<Element extends HTMLElement> = {
  event: string;
  element: Element;
  property: string;
  args: unknown;
};

export const dispatchEvent = <Element extends HTMLElement>({ event, element, args, property }: TOptions<Element>) => {
  const valueSetter = Object.getOwnPropertyDescriptor(element, property)?.set;

  const prototype = Object.getPrototypeOf(element);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, property)?.set;

  if (isFn(prototypeValueSetter) && valueSetter !== prototypeValueSetter) prototypeValueSetter.call(element, args);
  else if (isFn(valueSetter)) valueSetter.call(element, args);

  element.dispatchEvent(new Event(event, { bubbles: true }));
};
