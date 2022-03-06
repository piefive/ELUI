import { useCallback, useState } from 'react';

import { bindCustomAttr, getCustomAttr } from 'lib';

import { BUTTON_ENTER_PRESSED_ATTR } from '../constants';
import type { IButton } from '../types';

type TUseButtonKeyPress = {
  onKeyUp?: IButton['onKeyUp'];
  onKeyDown?: IButton['onKeyDown'];
};

const ENTER_KEY = 'Enter';

export const useButtonActive = ({ onKeyDown, onKeyUp }: TUseButtonKeyPress) => {
  const [isButtonPressed, setActive] = useState(false);

  const onButtonDown = useCallback(
    event => {
      if (event.key === ENTER_KEY) setActive(true);

      if (onKeyDown) onKeyDown(event);
    },
    [onKeyDown]
  );

  const onButtonUp = useCallback(
    event => {
      if (event.key === ENTER_KEY) setActive(false);

      if (onKeyUp) onKeyUp(event);
    },
    [onKeyUp]
  );

  const customAttr = getCustomAttr(BUTTON_ENTER_PRESSED_ATTR, isButtonPressed);

  return {
    ...bindCustomAttr(customAttr),
    isButtonPressed,
    onKeyUp: onButtonUp,
    onKeyDown: onButtonDown,
  };
};
