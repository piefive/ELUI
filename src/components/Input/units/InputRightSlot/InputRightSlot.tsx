import { useCallback } from 'react';

import { Icon } from '../../../Icon';

import { StyledContent, StyledRightSlot } from './styled';
import type { IInputRightSlot } from './types';

export const InputRightSlot = ({ rightSlot, isClearable, ...rest }: IInputRightSlot) => {
  return (
    <StyledRightSlot>
      {isClearable && <InputClearable {...rest} />}
      {rightSlot && <StyledContent withMargin={isClearable}>{rightSlot}</StyledContent>}
    </StyledRightSlot>
  );
};

const InputClearable = ({ inputRef }: Pick<IInputRightSlot, 'inputRef'>) => {
  const onClear = useCallback(() => {
    const element = inputRef.current;

    const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
    const prototype = Object.getPrototypeOf(element);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

    if (valueSetter && valueSetter !== prototypeValueSetter) prototypeValueSetter.call(element, '');
    else valueSetter.call(element, '');

    element.dispatchEvent(new Event('input', { bubbles: true }));
  }, [inputRef]);

  return <Icon.CrossSm onClick={onClear} />;
};
