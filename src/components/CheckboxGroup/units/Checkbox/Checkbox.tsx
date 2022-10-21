import { forwardRef } from 'react';
import { includes } from 'ramda';
import { css } from 'styled-components';

import { bindSemantics, combineClassNames } from 'lib';

import type { ICheckbox, ICheckboxInput } from '../../types';
import { CHECKBOX_CN } from '../../constants';
import { useCheckboxContext } from '../../hooks';
import { CheckboxInput } from '../CheckboxInput';

import { StyledCheckboxBox } from './styled';

export const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(
  (
    {
      variant,
      label,
      className,
      validate,
      validateMessage,
      message,
      boxStyle,
      onChange,
      checked,
      disabled,
      name,
      semantics,
      ...rest
    },
    checkboxRef
  ) => {
    const ctx = useCheckboxContext();

    const { value } = rest;
    const isGroup = Boolean(ctx);

    const checkboxProps: Partial<ICheckboxInput> = {
      name: isGroup ? ctx.name : name,
      checked: isGroup ? includes(String(value), ctx?.checkedValues ?? []) : checked,
      onChange: ctx?.onChange ?? onChange,
      disabled: ctx?.disabled ?? disabled,
    };

    return (
      <StyledCheckboxBox
        boxClassName={combineClassNames(className, CHECKBOX_CN)}
        variant={ctx?.variant ?? variant}
        isChecked={Boolean(checkboxProps.checked)}
        isDisabled={Boolean(checkboxProps.disabled)}
        validate={!isGroup ? validate : null}
        validateMessage={!isGroup ? validateMessage : null}
        {...bindSemantics(semantics)}
        boxStyle={css`
          ${isGroup &&
          css`
            padding-bottom: 16px;

            &:last-of-type {
              padding-bottom: 0;
            }
          `}

          ${boxStyle};
        `}
        {...{ label, message }}
      >
        <CheckboxInput ref={checkboxRef} {...rest} {...checkboxProps} />
      </StyledCheckboxBox>
    );
  }
);

Checkbox.displayName = 'Checkbox';
