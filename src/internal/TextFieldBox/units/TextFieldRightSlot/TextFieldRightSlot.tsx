import { useCallback } from 'react';

import { dispatchEvent } from 'lib';
import { Icon } from 'components';

import { StyledContent, StyledRightSlot } from './styled';
import type { TTextFieldRightSlot } from './types';

export const TextFieldRightSlot = <Element extends HTMLElement>({
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

const Clearable = <Element extends HTMLElement>({ fieldRef }: Pick<TTextFieldRightSlot<Element>, 'fieldRef'>) => {
  const onClear = useCallback(() => {
    dispatchEvent({
      event: 'input',
      element: fieldRef.current,
      property: 'value',
      args: '',
    });
  }, [fieldRef]);

  return <Icon.CrossSm onClick={onClear} />;
};
