import type { U } from 'ts-toolbelt';
import type { Dispatch, SetStateAction } from 'react';
import { omit } from 'ramda';

import { createException } from 'lib/utils';

type TDialogObserverFn = Dispatch<SetStateAction<boolean>>;

type TDialogObserver = {
  show: (name: string) => void;
  hide: (name: string) => void;
  toggle: (name: string) => void;
  register: (name: string, observer: TDialogObserverFn) => void;
  unregister: (name: string) => void;
};

const createDialogObserver = (): TDialogObserver => {
  const dialogs = new Map<string, U.Nullable<TDialogObserverFn>>();

  const broadcast = (name: string, isOpen: SetStateAction<boolean>) => {
    dialogs.get(name)?.(isOpen);
  };

  const register = (name: string, observer: TDialogObserverFn) => {
    if (dialogs.get(name)) {
      return createException(`The dialog with the name "${name}" has already been registered`, {
        withName: true,
        variant: 'throw',
      });
    }

    dialogs.set(name, observer);
  };

  const unregister = (name: string) => {
    dialogs.delete(name);
  };

  return {
    show: (name: string) => broadcast(name, true),
    hide: (name: string) => broadcast(name, false),
    toggle: (name: string) => broadcast(name, isOpen => !isOpen),
    register,
    unregister,
  };
};

export const dialogObserver = createDialogObserver();

export const dialog: Pick<TDialogObserver, 'show' | 'hide' | 'toggle'> = omit(
  ['subscribe', 'unsubscribe'],
  dialogObserver
);
