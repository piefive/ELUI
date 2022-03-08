import { useMemo } from 'react';

import { StyledCheckboxGroupList } from 'components/CheckboxGroup/styled';
import { combineClassNames } from 'lib';
import { FieldBox } from 'internal';

import type { ICheckboxGroup, ICheckboxGroupComponent, TCheckboxContext } from './types';
import { CHECKBOX_GROUP_CN } from './constants';
import { CheckboxProvider } from './hooks';
import { Checkbox } from './units';

export const CheckboxGroup = (({
  className,
  name,
  variant = 'primary',
  checkedValues,
  onChange,
  disabled,
  children,
  ...rest
}: ICheckboxGroupComponent) => {
  const ctx = useMemo<TCheckboxContext>(
    () => ({ name, checkedValues, onChange, disabled, variant }),
    [checkedValues, disabled, name, onChange, variant]
  );

  return (
    <FieldBox className={combineClassNames(className, CHECKBOX_GROUP_CN)} {...rest}>
      <StyledCheckboxGroupList>
        <CheckboxProvider value={ctx}>{children}</CheckboxProvider>
      </StyledCheckboxGroupList>
    </FieldBox>
  );
}) as ICheckboxGroup;

CheckboxGroup.Checkbox = Checkbox;
