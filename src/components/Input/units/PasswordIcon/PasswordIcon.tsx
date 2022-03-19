import { useCallback } from 'react';

import { Icon } from 'components/Icon';

import type { TPasswordIcon } from './types';

export const PasswordIcon = ({ inputType, setInputType }: TPasswordIcon) => {
  const isHidden = inputType === 'password';

  const handleToggleType = useCallback(
    () => setInputType(type => (type === 'password' ? 'text' : 'password')),
    [setInputType]
  );

  const PasswordIcon = Icon[isHidden ? 'EyeOff' : 'Eye'];

  return <PasswordIcon onClick={handleToggleType} iconStyle={{ marginLeft: 8 }} />;
};
