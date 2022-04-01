import { forwardRef } from 'react';

import { FieldLabel } from 'internal/FieldBox/units';
import { isBool, useLastValidState } from 'lib';

import type { TFieldBox } from './types';
import { StyledFieldBox, StyledMessage, StyledValidateMessage } from './styled';

export const FieldBox = forwardRef<HTMLDivElement, TFieldBox>(
  (
    { className, validate = null, children, validateMessage, message, label, isRequired, onLabelClick, boxStyle },
    fieldRef
  ) => {
    const validateState = useLastValidState(validate, [true, false]);

    return (
      <StyledFieldBox ref={fieldRef} {...{ className, boxStyle }}>
        {label && <FieldLabel onClick={onLabelClick} {...{ label, isRequired }} />}
        {children}
        <StyledValidateMessage validate={validateState}>{isBool(validate) && validateMessage}</StyledValidateMessage>
        <StyledMessage>{message}</StyledMessage>
      </StyledFieldBox>
    );
  }
);

FieldBox.displayName = 'FieldBox';
