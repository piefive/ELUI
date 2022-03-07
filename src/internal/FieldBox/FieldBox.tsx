import { FieldLabel } from 'internal/FieldBox/units';
import { isBool, useLastValidState } from 'lib';

import type { TFieldBox } from './types';
import { StyledFieldBox, StyledMessage, StyledValidateMessage } from './styled';

export const FieldBox = ({
  className,
  validate = null,
  children,
  validateMessage,
  message,
  label,
  isRequired,
  onLabelClick,
  boxStyle,
}: TFieldBox) => {
  const validateState = useLastValidState(validate, [true, false]);

  return (
    <StyledFieldBox {...{ className, boxStyle }}>
      {label && <FieldLabel onClick={onLabelClick} {...{ label, isRequired }} />}
      {children}
      <StyledValidateMessage validate={validateState}>{isBool(validate) && validateMessage}</StyledValidateMessage>
      <StyledMessage>{message}</StyledMessage>
    </StyledFieldBox>
  );
};
