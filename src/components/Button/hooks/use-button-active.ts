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
      if (event.code === ENTER_KEY) setActive(true);

      if (onKeyDown) onKeyDown(event);
    },
    [onKeyDown]
  );

  const onButtonUp = useCallback(
    event => {
      if (event.code === ENTER_KEY) setActive(false);

      if (onKeyUp) onKeyUp(event);
    },
    [onKeyUp]
  );

  return {
    ...bindCustomAttr(getCustomAttr(BUTTON_ENTER_PRESSED_ATTR, isButtonPressed)),
    onKeyUp: onButtonUp,
    onKeyDown: onButtonDown,
  };
};
