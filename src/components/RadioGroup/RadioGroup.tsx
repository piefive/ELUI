import { useMemo } from 'react';

import { combineClassNames } from 'lib';
import { FieldBox } from 'internal';

import type { IRadioGroup, IRadioGroupComponent, TRadioContext } from './types';
import { RADIO_GROUP_CN } from './constants';
import { RadioProvider } from './hooks';
import { Radio } from './units';
import { StyledRadioGroupList } from './styled';

export const RadioGroup = (({
  className,
  name,
  variant = 'primary',
  activeValue,
  onChange,
  disabled,
  children,
  ...rest
}: IRadioGroupComponent) => {
  const ctx = useMemo<TRadioContext>(
    () => ({ name, activeValue, onChange, disabled, variant }),
    [activeValue, disabled, name, onChange, variant]
  );

  return (
    <FieldBox className={combineClassNames(className, RADIO_GROUP_CN)} {...rest}>
      <StyledRadioGroupList>
        <RadioProvider value={ctx}>{children}</RadioProvider>
      </StyledRadioGroupList>
    </FieldBox>
  );
}) as IRadioGroup;

RadioGroup.Radio = Radio;
