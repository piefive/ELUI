import { TStyledComponentsProps, isBool, useLastValidState } from 'lib';

import { FieldMessage } from '../FieldMessage';
import { FieldLabel } from '../FieldLabel';

import { StyledField, StyledLeftSlot, StyledTextFieldBox, StyledValidateMessage } from './styled';
import type { TTextFieldBox } from './types';
import { TextFieldRightSlot } from './units';

export const TextFieldBox = <Element extends HTMLInputElement | HTMLTextAreaElement>({
  fieldRef = null,
  containerRef,
  className,
  label,
  message,
  validateMessage,
  isRequired = true,
  isClearable = false,
  isDisabled = false,
  isFocused = false,
  validate = null,
  children,
  leftSlot,
  rightSlot,
  boxStyle,
}: TTextFieldBox<Element>) => {
  const validateState = useLastValidState(validate, [true, false]);
  const isRightSlotRender = Boolean(isClearable || rightSlot);
  const messageStyle: TStyledComponentsProps = { display: 'block', paddingTop: 8 };

  const onFieldFocus = () => fieldRef?.current.focus();

  return (
    <StyledTextFieldBox {...{ className, boxStyle }}>
      {label && <FieldLabel onClick={onFieldFocus} {...{ label, isRequired }} />}
      <StyledField ref={containerRef} onClick={onFieldFocus} {...{ validate, isFocused, isDisabled }}>
        {leftSlot && <StyledLeftSlot>{leftSlot}</StyledLeftSlot>}
        {children}
        {isRightSlotRender && <TextFieldRightSlot {...{ fieldRef, rightSlot, isClearable }} />}
      </StyledField>
      <StyledValidateMessage {...{ messageStyle }} validate={validateState}>
        {isBool(validate) && validateMessage}
      </StyledValidateMessage>
      <FieldMessage {...{ messageStyle }}>{message}</FieldMessage>
    </StyledTextFieldBox>
  );
};
