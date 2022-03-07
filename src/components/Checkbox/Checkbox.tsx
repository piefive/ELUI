import { forwardRef } from 'react';

import { combineClassNames } from 'lib';

import type { ICheckbox } from './types';
import { CHECKBOX_CN } from './constants';
import { CheckboxInput } from './units';
import { StyledCheckboxBox } from './styled';

export const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(
  ({ variant, label, className, validate, validateMessage, message, boxStyle, ...rest }, checkboxRef) => {
    const { checked, disabled } = rest;

    return (
      <StyledCheckboxBox
        boxClassName={combineClassNames(className, CHECKBOX_CN)}
        isChecked={Boolean(checked)}
        isDisabled={Boolean(disabled)}
        {...{ variant, label, validate, validateMessage, message, boxStyle }}
      >
        <CheckboxInput ref={checkboxRef} {...rest} />
      </StyledCheckboxBox>
    );
  }
);

Checkbox.displayName = 'Checkbox';
