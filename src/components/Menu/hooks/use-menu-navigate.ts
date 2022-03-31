import { useRef } from 'react';
import type { U } from 'ts-toolbelt';

import { createListener, isUndefined, useMount } from 'lib';

import { MENU_ITEM_CN } from '../constants';

const CODES = ['ArrowUp', 'ArrowDown'];

export const useMenuNavigate = () => {
  const ref = useRef<HTMLUListElement>();

  useMount(() => {
    const checkNode = (element: Element) => {
      const isDisabled = element.getAttribute('aria-disabled') === 'true';
      const isChecked = element.getAttribute('aria-checked') === 'true';
      return isChecked || isDisabled;
    };

    const listener = createListener(document, 'keydown', (event: KeyboardEvent) => {
      // const code = event.code;
      // const instance = ref.current;
      // const items = instance.querySelectorAll(`.${MENU_ITEM_CN}`);
      //
      // if (items.length && CODES.includes(code)) {
      //   let focusElement: U.Nullable<HTMLElement> = undefined;
      //   let index = 0;
      //
      //   while (isUndefined(focusElement)) {
      //     const element = items[index];
      //     const isActive = element.contains(document.activeElement);
      //
      //     const isUp = code === 'ArrowUp';
      //     const isDown = code === 'ArrowDown';
      //
      //     const isFirst = isActive && index === 0 && isUp;
      //     const isLast = isActive && index === items.length - 1 && isDown;
      //
      //     if (isFirst || isLast) {
      //       focusElement = null;
      //       break;
      //     }
      //
      //     if (checkNode(element)) focusElement = <HTMLElement>element;
      //
      //     if (isActive) {
      //       const isValid = checkNode(items[isUp ? --index : ++index]);
      //       if (isValid) {
      //         focusElement = items[index];
      //         break;
      //       }
      //     }
      //   }
      //
      //   if (focusElement) focusElement.focus();
      // }
    });

    listener.on();

    return () => listener.off();
  });

  return { ref };
};
