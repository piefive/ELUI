import type { U } from 'ts-toolbelt';
import type { Dispatch, SetStateAction } from 'react';
import { omit } from 'ramda';

type TDialogObserverFn = Dispatch<SetStateAction<boolean>>;

type TDialogObserver = {
  show: (name: string) => void;
  hide: (name: string) => void;
  toggle: (name: string) => void;
  subscribe: (name: string, observer: TDialogObserverFn) => void;
  unsubscribe: (name: string, observer: TDialogObserverFn) => void;
};

const createDialogObserver = (): TDialogObserver => {
  const dialogs = new Map<string, U.Nullable<TDialogObserverFn[]>>();

  const broadcast = (name: string, isOpen: SetStateAction<boolean>) => {
    const observers = dialogs.get(name);
    observers?.forEach(obs => obs(isOpen));
  };

  const subscribe = (name: string, observer: TDialogObserverFn) => {
    const observers = dialogs.get(name) ?? [];
    dialogs.set(name, [...observers, observer]);
  };

  const unsubscribe = (name: string, observer: TDialogObserverFn) => {
    const observers = dialogs.get(name);

    if (observers) {
      const next = observers.filter(fn => fn !== observer);
      if (!next.length) dialogs.delete(name);
      else dialogs.set(name, next);
    }
  };

  return {
    show: (name: string) => broadcast(name, true),
    hide: (name: string) => broadcast(name, false),
    toggle: (name: string) => broadcast(name, isOpen => !isOpen),
    subscribe,
    unsubscribe,
  };
};

export const dialogObserver = createDialogObserver();

export const dialog: Pick<TDialogObserver, 'show' | 'hide' | 'toggle'> = omit(
  ['subscribe', 'unsubscribe'],
  dialogObserver
);
