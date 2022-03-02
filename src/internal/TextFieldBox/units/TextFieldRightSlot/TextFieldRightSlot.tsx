import { useCallback } from 'react';

import { Icon } from 'components';

import { StyledContent, StyledRightSlot } from './styled';
import type { TTextFieldRightSlot } from './types';

export const TextFieldRightSlot = <Element extends HTMLInputElement | HTMLTextAreaElement>({
  rightSlot,
  isClearable,
  ...rest
}: TTextFieldRightSlot<Element>) => {
  return (
    <StyledRightSlot>
      {isClearable && <Clearable<Element> {...rest} />}
      {rightSlot && <StyledContent withMargin={isClearable}>{rightSlot}</StyledContent>}
    </StyledRightSlot>
  );
};

const Clearable = <Element extends HTMLInputElement | HTMLTextAreaElement>({
  fieldRef,
}: Pick<TTextFieldRightSlot<Element>, 'fieldRef'>) => {
  const onClear = useCallback(() => {
    const element = fieldRef.current;

    const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
    const prototype = Object.getPrototypeOf(element);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

    if (valueSetter && valueSetter !== prototypeValueSetter) prototypeValueSetter.call(element, '');
    else valueSetter.call(element, '');

    element.dispatchEvent(new Event('input', { bubbles: true }));
  }, [fieldRef]);

  return <Icon.CrossSm onClick={onClear} />;
};
