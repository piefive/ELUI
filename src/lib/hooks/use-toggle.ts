import { useCallback, useState } from 'react';

import { isBool } from '../utils';

export const useToggle = (initialValue: boolean): [boolean, (isOpen?: unknown) => void] => {
  const [state, setToggle] = useState(initialValue);

  const onToggle = useCallback((isOpen?: unknown) => {
    setToggle(isBool(isOpen) ? isOpen : prevState => !prevState);
  }, []);

  return [state, onToggle];
};
